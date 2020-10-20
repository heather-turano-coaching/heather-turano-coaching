import { extendType, stringArg } from "@nexus/schema";

import { formatSchemaError } from "../../utils";
import {
  hashAndSaltUsersPassword,
  validatePasswords,
  verifyForgotPasswordToken
} from "./auth.utils.password";

export const AuthMutationResetPassword = extendType({
  type: "Mutation",
  definition(t) {
    t.field("resetPassword", {
      type: "Message",
      args: {
        token: stringArg({ required: true }),
        emailAddress: stringArg({ required: true }),
        password: stringArg({ required: true }),
        repeatPassword: stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          const user = await context.prisma.user.findOne({
            where: {
              email_address: args.emailAddress
            }
          });

          if (!user) {
            throw "Error when getting user";
          }

          if (user.status !== "RESET_PASSWORD") {
            throw `User cannot reset their password in "${user?.status}" state`;
          }

          // verify that
          await verifyForgotPasswordToken(args.token, user.confirmation_key);

          // run the passwords through some checks
          await validatePasswords(args.password, args.repeatPassword);

          // salt and hash the password
          const hashedPassword = await hashAndSaltUsersPassword(args.password);

          // update the user with the new password
          // update the account status
          // clear the confirmation key
          await context.prisma.user.update({
            where: {
              id: user.id
            },
            data: {
              confirmation_key: "",
              status: "CONFIRMED",
              password: hashedPassword
            }
          });
          return {
            message: "Password reset successfully"
          };
        } catch (error) {
          throw new Error(
            formatSchemaError("Error when trying to reset password", error)
          );
        }
      }
    });
  }
});

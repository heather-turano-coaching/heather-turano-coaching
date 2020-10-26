import { extendType, stringArg } from "@nexus/schema";

import { formatSchemaError } from "../../utils";
import { verifyForgotPasswordToken } from "./auth.utils.password";

export const AuthMutationVerifyResetPasswordToken = extendType({
  type: "Mutation",
  definition(t) {
    t.field("verifyResetPasswordToken", {
      type: "Boolean",
      description: "Verifies the validity of the reset password token",
      args: {
        token: stringArg({ required: true }),
        emailAddress: stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          const user = await context.prisma.user.findOne({
            where: {
              email_address: args.emailAddress
            }
          });
          if (user && user.status === "RESET_PASSWORD") {
            return await verifyForgotPasswordToken(
              args.token,
              user.confirmation_key
            );
          }
          return false;
        } catch (error) {
          throw new Error(
            formatSchemaError(
              "Error when validating reset password token",
              error
            )
          );
        }
      }
    });
  }
});

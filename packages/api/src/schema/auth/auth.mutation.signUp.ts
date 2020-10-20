import { extendType, stringArg } from "@nexus/schema";

import { formatSchemaError } from "../../utils";
import { sendConfirmAccountEmail } from "./auth.utils.email";
import {
  getEmailToken,
  hashAndSaltUsersPassword,
  validatePasswords
} from "./auth.utils.password";

/**
 * Creates an account and
 * sends a verification email to the user
 */
export const AuthMutationSignUp = extendType({
  type: "Mutation",
  definition(t) {
    t.field("signUp", {
      type: "Message",
      description:
        "Creates an account and sends a confirmation email to confirm the account",
      args: {
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        emailAddress: stringArg({ required: true }),
        password: stringArg({ required: true }),
        repeatPassword: stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          // check if the user already exists
          const user = await context.prisma.user.findOne({
            where: {
              email_address: args.emailAddress
            }
          });
          if (user) throw "User already exists";

          // run the passwords through some checks
          await validatePasswords(args.password, args.repeatPassword);

          // salt and hash the password
          const hashedPassword = await hashAndSaltUsersPassword(args.password);

          // create a new user
          const confirmationKey = await getEmailToken({
            email: args.emailAddress
          });

          const newUser = await context.prisma.user.create({
            data: {
              email_address: args.emailAddress,
              password: hashedPassword,
              first_name: args.firstName,
              last_name: args.lastName,
              confirmation_key: confirmationKey
            }
          });

          await sendConfirmAccountEmail({
            firstName: newUser.first_name,
            emailAddress: newUser.email_address,
            confirmationKey
          });
          return { message: "User created successfully" };
        } catch (error) {
          throw new Error(
            formatSchemaError("Error when trying to create an account", error)
          );
        }
      }
    });
  }
});

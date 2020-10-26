import { extendType, stringArg } from "@nexus/schema";

import { formatSchemaError } from "../../utils";
import { sendForgotPasswordEmail } from "./auth.utils.email";
import { getForgotPasswordToken } from "./auth.utils.password";

export const AuthMutationForgotPassword = extendType({
  type: "Mutation",
  definition(t) {
    t.field("forgotPassword", {
      type: "Message",
      description:
        "Verifies the users account status and if valid, sends an email with a link to reset their password",
      args: {
        emailAddress: stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          // find the user with the email address
          const user = await context.prisma.user.findOne({
            where: {
              email_address: args.emailAddress
            }
          });

          // user cannot be in a status other than reset or confirmed
          if (
            user &&
            (user.status === "CONFIRMED" || user.status === "RESET_PASSWORD")
          ) {
            // create a new JWT in the DB && update the status of the user's status
            const confirmationKey = await getForgotPasswordToken({
              email: user.email_address
            });
            await context.prisma.user.update({
              where: {
                id: user.id
              },
              data: {
                confirmation_key: confirmationKey,
                status: "RESET_PASSWORD"
              }
            });

            // send a reset password email
            await sendForgotPasswordEmail({
              emailAddress: user.email_address,
              firstName: user.first_name,
              confirmationKey
            });
          }
          return {
            message:
              "If the email address that you provided is a part of our system, you will receive an email with instructions on how to reset your password."
          };
        } catch (error) {
          throw new Error(
            formatSchemaError(
              "Error when trying to invoke the forgot password process",
              error
            )
          );
        }
      }
    });
  }
});

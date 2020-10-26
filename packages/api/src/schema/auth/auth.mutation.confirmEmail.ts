import { extendType, stringArg } from "@nexus/schema";

import { formatSchemaError } from "../../utils";
import { verifyEmailToken } from "./auth.utils.password";

export const AuthMutationConfirmEmail = extendType({
  type: "Mutation",
  definition(t) {
    t.field("confirmEmail", {
      type: "Message",
      description:
        "Validates the token against the users email address and set's the users account to CONFIRMED",
      args: {
        token: stringArg({ required: true }),
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

          if (user && user.status === "CONFIRM_EMAIL") {
            // verify the token
            await verifyEmailToken(args.token);

            // update the record with a new status and clear the token
            await context.prisma.user.update({
              where: {
                id: user.id
              },
              data: {
                confirmation_key: "",
                status: "CONFIRMED"
              }
            });
            return { message: "Email address successfully verified" };
          }
          throw "Problem when verifying the user";
        } catch (error) {
          throw new Error(
            formatSchemaError("Problem when verifying the email address", error)
          );
        }
      }
    });
  }
});

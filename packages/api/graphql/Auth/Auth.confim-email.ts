import { schema } from "nexus";

import { formatError } from "../app.util";
import { verifyEmailToken } from "./Auth.utils";

schema.extendType({
  type: "Mutation",
  definition(t) {
    t.field("confirmEmail", {
      type: "Message",
      description:
        "Validates the token against the users email address and set's the users account to CONFIRMED",
      args: {
        token: schema.stringArg({ required: true }),
        emailAddress: schema.stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          // find the user with the email address
          const user = await context.db.user.findOne({
            where: {
              email_address: args.emailAddress
            }
          });

          if (user && user.status === "CONFIRM_EMAIL") {
            // verify the token
            await verifyEmailToken(args.token);

            // update the record with a new status and clear the token
            await context.db.user.update({
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
            formatError("Problem when verifying the email address", error)
          );
        }
      }
    });
  }
});

import { schema } from "nexus";

import { formatError } from "../app.util";
import { verifyForgotPasswordToken } from "./auth.utils.password";

schema.extendType({
  type: "Mutation",
  definition(t) {
    t.field("verifyResetPasswordToken", {
      type: "Boolean",
      description: "Verifies the validity of the reset password token",
      args: {
        token: schema.stringArg({ required: true }),
        emailAddress: schema.stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          const user = await context.db.user.findOne({
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
            formatError("Error when validating reset password token", error)
          );
        }
      }
    });
  }
});

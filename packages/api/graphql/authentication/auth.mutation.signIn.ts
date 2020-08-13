import cookie from "cookie";
import { schema } from "nexus";

import { formatError } from "../app.util";
import {
  genericAuthError,
  getJsonWebToken,
  matchHashedPasswords
} from "./auth.utils.password";

schema.extendType({
  type: "Mutation",
  definition(t) {
    t.field("signIn", {
      type: "Boolean",
      description:
        "Verifies the user's account status and if valid, sends a authorization cookie to the client in the response header",
      args: {
        emailAddress: schema.stringArg({ required: true }),
        password: schema.stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          const user = await context.db.user.findOne({
            where: {
              email_address: args.emailAddress
            }
          });
          if (!user) {
            throw genericAuthError;
          }
          if (user.status === "RESET_PASSWORD") {
            throw `User cannot sign in while account is in "RESET_PASSWORD" mode`;
          }
          if (user.status === "CONFIRM_EMAIL") {
            throw "User has not confirmed their email address.";
          }

          // verifies that the hashed passwords match
          await matchHashedPasswords(args.password, user.password);

          // gets the jwt
          const jwt = await getJsonWebToken({
            name: user.first_name,
            sub: user.id
          });

          // sets the access_token in the cookie
          context.res.setHeader(
            "Set-Cookie",
            cookie.serialize("access_token", jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              maxAge: 3600,
              path: "/"
            })
          );
          return true;
        } catch (error) {
          throw new Error(formatError("Problem when trying to sign in", error));
        }
      }
    });
  }
});

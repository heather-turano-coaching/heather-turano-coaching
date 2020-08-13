"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_1 = tslib_1.__importDefault(require("cookie"));
const nexus_1 = require("nexus");
const app_util_1 = require("../app.util");
const auth_utils_password_1 = require("./auth.utils.password");
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("signIn", {
            type: "Boolean",
            description: "Verifies the user's account status and if valid, sends a authorization cookie to the client in the response header",
            args: {
                emailAddress: nexus_1.schema.stringArg({ required: true }),
                password: nexus_1.schema.stringArg({ required: true })
            },
            resolve(_root, args, context) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        const user = yield context.db.user.findOne({
                            where: {
                                email_address: args.emailAddress
                            }
                        });
                        if (!user) {
                            throw auth_utils_password_1.genericAuthError;
                        }
                        if (user.status === "RESET_PASSWORD") {
                            throw `User cannot sign in while account is in "RESET_PASSWORD" mode`;
                        }
                        if (user.status === "CONFIRM_EMAIL") {
                            throw "User has not confirmed their email address.";
                        }
                        yield auth_utils_password_1.matchHashedPasswords(args.password, user.password);
                        const jwt = yield auth_utils_password_1.getJsonWebToken({
                            name: user.first_name,
                            sub: user.id
                        });
                        context.res.setHeader("Set-Cookie", cookie_1.default.serialize("access_token", jwt, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== "development",
                            sameSite: "strict",
                            maxAge: 3600,
                            path: "/"
                        }));
                        return true;
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Problem when trying to sign in", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=auth.mutation.signIn.js.map
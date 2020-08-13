"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
const app_util_1 = require("../app.util");
const auth_utils_password_1 = require("./auth.utils.password");
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("verifyResetPasswordToken", {
            type: "Boolean",
            description: "Verifies the validity of the reset password token",
            args: {
                token: nexus_1.schema.stringArg({ required: true }),
                emailAddress: nexus_1.schema.stringArg({ required: true })
            },
            resolve(_root, args, context) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        const user = yield context.db.user.findOne({
                            where: {
                                email_address: args.emailAddress
                            }
                        });
                        if (user && user.status === "RESET_PASSWORD") {
                            return yield auth_utils_password_1.verifyForgotPasswordToken(args.token, user.confirmation_key);
                        }
                        return false;
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Error when validating reset password token", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=auth.mutation.verifyResetPasswordToken.js.map
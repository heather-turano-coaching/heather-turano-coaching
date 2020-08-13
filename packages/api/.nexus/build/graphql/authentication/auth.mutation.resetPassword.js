"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
const app_util_1 = require("../app.util");
const auth_utils_password_1 = require("./auth.utils.password");
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("resetPassword", {
            type: "Message",
            args: {
                token: nexus_1.schema.stringArg({ required: true }),
                emailAddress: nexus_1.schema.stringArg({ required: true }),
                password: nexus_1.schema.stringArg({ required: true }),
                repeatPassword: nexus_1.schema.stringArg({ required: true })
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
                            throw "Error when getting user";
                        }
                        if (user.status !== "RESET_PASSWORD") {
                            throw `User cannot reset their password in "${user === null || user === void 0 ? void 0 : user.status}" state`;
                        }
                        yield auth_utils_password_1.verifyForgotPasswordToken(args.token, user.confirmation_key);
                        yield auth_utils_password_1.validatePasswords(args.password, args.repeatPassword);
                        const hashedPassword = yield auth_utils_password_1.hashAndSaltUsersPassword(args.password);
                        yield context.db.user.update({
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
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Error when trying to reset password", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=auth.mutation.resetPassword.js.map
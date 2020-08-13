"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
const app_util_1 = require("../app.util");
const auth_utils_email_1 = require("./auth.utils.email");
const auth_utils_password_1 = require("./auth.utils.password");
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("forgotPassword", {
            type: "Message",
            description: "Verifies the users account status and if valid, sends an email with a link to reset their password",
            args: {
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
                        if (user &&
                            (user.status === "CONFIRMED" || user.status === "RESET_PASSWORD")) {
                            const confirmationKey = yield auth_utils_password_1.getForgotPasswordToken({
                                email: user.email_address
                            });
                            yield context.db.user.update({
                                where: {
                                    id: user.id
                                },
                                data: {
                                    confirmation_key: confirmationKey,
                                    status: "RESET_PASSWORD"
                                }
                            });
                            yield auth_utils_email_1.sendForgotPasswordEmail({
                                emailAddress: user.email_address,
                                firstName: user.first_name,
                                confirmationKey
                            });
                        }
                        return {
                            message: "If the email address that you provided is a part of our system, you will receive an email with instructions on how to reset your password."
                        };
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Error when trying to invoke the forgot password process", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=auth.mutation.forgotPassword.js.map
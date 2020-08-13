"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
const app_util_1 = require("../app.util");
const auth_utils_password_1 = require("./auth.utils.password");
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("confirmEmail", {
            type: "Message",
            description: "Validates the token against the users email address and set's the users account to CONFIRMED",
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
                        if (user && user.status === "CONFIRM_EMAIL") {
                            yield auth_utils_password_1.verifyEmailToken(args.token);
                            yield context.db.user.update({
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
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Problem when verifying the email address", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=auth.mutation.confirmEmail.js.map
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
        t.field("signUp", {
            type: "Message",
            description: "Creates an account and sends a confirmation email to confirm the account",
            args: {
                firstName: nexus_1.schema.stringArg({ required: true }),
                lastName: nexus_1.schema.stringArg({ required: true }),
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
                        if (user)
                            throw "User already exists";
                        yield auth_utils_password_1.validatePasswords(args.password, args.repeatPassword);
                        const hashedPassword = yield auth_utils_password_1.hashAndSaltUsersPassword(args.password);
                        const confirmationKey = yield auth_utils_password_1.getEmailToken({
                            email: args.emailAddress
                        });
                        const newUser = yield context.db.user.create({
                            data: {
                                email_address: args.emailAddress,
                                password: hashedPassword,
                                first_name: args.firstName,
                                last_name: args.lastName,
                                confirmation_key: confirmationKey
                            }
                        });
                        yield auth_utils_email_1.sendConfirmAccountEmail({
                            firstName: newUser.first_name,
                            emailAddress: newUser.email_address,
                            confirmationKey
                        });
                        return { message: "User created successfully" };
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Error when trying to create an account", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=auth.mutation.signUp.js.map
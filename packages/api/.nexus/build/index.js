"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = tslib_1.__importDefault(require("nexus"));
process.once('uncaughtException', error => {
    nexus_1.default.log.fatal('uncaughtException', { error: error });
    process.exit(1);
});
process.once('unhandledRejection', error => {
    nexus_1.default.log.fatal('unhandledRejection', { error: error });
    process.exit(1);
});
require("./graphql/app.addToContext");
require("./graphql/app.milddlewares");
require("./graphql/authentication/auth.mutation.confirmEmail");
require("./graphql/authentication/auth.mutation.forgotPassword");
require("./graphql/authentication/auth.mutation.resetPassword");
require("./graphql/authentication/auth.mutation.signIn");
require("./graphql/authentication/auth.mutation.signUp");
require("./graphql/authentication/auth.mutation.verifyResetPasswordToken");
require("./graphql/checkout/checkout.mutation.checkoutMindfulMovement");
require("./graphql/checkout/checkout.mutation.heatherTuranoCoaching");
require("./graphql/checkout/checkout.objects");
require("./graphql/messaage/message.objects");
require("./graphql/Post/Post");
require("./graphql/app");
nexus_1.default.assemble();
nexus_1.default.start();
//# sourceMappingURL=module.js.map
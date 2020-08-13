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
require("./graphql/authentication/Auth.confim-email");
require("./graphql/authentication/Auth.forgot-password");
require("./graphql/authentication/Auth.reset-password");
require("./graphql/authentication/Auth.sign-in");
require("./graphql/authentication/Auth.sign-up");
require("./graphql/authentication/Auth.verify-reset-password-token");
require("./graphql/checkout/checkout.mindful-movement");
require("./graphql/checkout/checkout.objects");
require("./graphql/messaage/message.objects");
require("./graphql/post/post");
require("./graphql/app");
nexus_1.default.assemble();
nexus_1.default.start();
//# sourceMappingURL=module.js.map
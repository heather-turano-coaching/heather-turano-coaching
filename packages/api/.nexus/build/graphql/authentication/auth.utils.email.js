"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendForgotPasswordEmail = exports.sendConfirmAccountEmail = void 0;
const tslib_1 = require("tslib");
const mail_1 = require("@sendgrid/mail");
mail_1.setApiKey(process.env.SENDGRID_API_KEY);
exports.sendConfirmAccountEmail = ({ firstName, emailAddress, confirmationKey }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = {
            to: emailAddress,
            from: process.env.SENDGRID_FROM_EMAIL,
            templateId: process.env
                .SENDGRID_TRANSACTIONAL_EMAIL__CONFIRM_EMAIL_ADDRESS,
            dynamicTemplateData: {
                firstName,
                link: `${process.env.SENDGRID_ROOT_DOMAIN}/confirm?emailAddress=${emailAddress}&token=${confirmationKey}`
            }
        };
        yield mail_1.send(message);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.sendForgotPasswordEmail = ({ firstName, emailAddress, confirmationKey }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = {
            to: emailAddress,
            from: process.env.SENDGRID_FROM_EMAIL,
            templateId: process.env
                .SENDGRID_TRANSACTIONAL_EMAIL__FORGOT_PASSWORD,
            dynamicTemplateData: {
                firstName,
                link: `${process.env.SENDGRID_ROOT_DOMAIN}/confirm?emailAddress=${emailAddress}&token=${confirmationKey}`
            }
        };
        yield mail_1.send(message);
    }
    catch (error) {
        throw new Error(error);
    }
});
//# sourceMappingURL=auth.utils.email.js.map
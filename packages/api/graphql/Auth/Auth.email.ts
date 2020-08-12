import { send, setApiKey } from "@sendgrid/mail";

setApiKey(process.env.SENDGRID_API_KEY);

export const sendConfirmAccountEmail = async ({
  firstName,
  emailAddress,
  confirmationKey
}: {
  firstName: string;
  emailAddress: string;
  confirmationKey: string;
}): Promise<void> => {
  try {
    const message = {
      to: emailAddress,
      from: process.env.SENDGRID_FROM_EMAIL,
      templateId:
        process.env.SENDGRID_TRANSACTIONAL_EMAIL__CONFIRM_EMAIL_ADDRESS,
      dynamicTemplateData: {
        firstName,
        link: `${process.env.SENDGRID_ROOT_DOMAIN}/confirm?emailAddress=${emailAddress}&token=${confirmationKey}`
      }
    };

    await send(message);
  } catch (error) {
    throw new Error(error);
  }
};

export const sendForgotPasswordEmail = async ({
  firstName,
  emailAddress,
  confirmationKey
}: {
  firstName: string;
  emailAddress: string;
  confirmationKey: string;
}): Promise<void> => {
  try {
    const message = {
      to: emailAddress,
      from: process.env.SENDGRID_FROM_EMAIL,
      templateId: process.env.SENDGRID_TRANSACTIONAL_EMAIL__FORGOT_PASSWORD,
      dynamicTemplateData: {
        firstName,
        link: `${process.env.SENDGRID_ROOT_DOMAIN}/confirm?emailAddress=${emailAddress}&token=${confirmationKey}`
      }
    };

    await send(message);
  } catch (error) {
    throw new Error(error);
  }
};

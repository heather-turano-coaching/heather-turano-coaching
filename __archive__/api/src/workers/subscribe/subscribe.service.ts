import {
  SubscribeRequest,
  Mailchimp__Request__AddListMember,
  MailchimpListMember,
  MailchimpResponse__Error
} from "@heather-turano-coaching/domain";
import { mailchimpHeaders, mailchimpBaseUrl } from "../../configs";
import { ServiceError } from "../../utils/ServiceError";

export const isMailchimpError = <ResponseType>(
  pet: MailchimpResponse__Error | ResponseType
): pet is MailchimpResponse__Error => {
  return (pet as MailchimpResponse__Error).detail !== undefined;
};

export const addSubscriberToMailchimpAudience = async (
  requestBody: SubscribeRequest,
  tags?: string[]
): Promise<MailchimpListMember> => {
  try {
    const mailchimpAddListMemberBody: Mailchimp__Request__AddListMember = {
      email_address: requestBody.address,
      email_type: "html",
      status: "subscribed",
      tags: tags || [],
      merge_fields: {
        FNAME: requestBody.firstName
      }
    };

    const url = `${mailchimpBaseUrl}/lists/${process.env.MAILCHIMP_SUBSCRIBE_AUDIENCE_ID}/members`;

    const user = await fetch(url, {
      method: "POST",
      headers: mailchimpHeaders,
      body: JSON.stringify(mailchimpAddListMemberBody)
    });
    const userJson = await user.json();

    if (isMailchimpError(userJson)) {
      if (userJson.status === 400) {
        throw new ServiceError(
          "SERVER ERROR",
          `The email address "${requestBody.address}" is already subscribed.`,
          userJson
        );
      }

      if (userJson.status !== 200) {
        throw new ServiceError("SERVER ERROR", userJson.detail, userJson);
      }
    }

    return userJson;
  } catch ({ code, message, context }) {
    throw new ServiceError("SERVER ERROR", message, context);
  }
};

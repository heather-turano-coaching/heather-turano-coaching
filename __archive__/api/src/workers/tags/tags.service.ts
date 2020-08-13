import {
  MailchimpListMember,
  Mailchimp__Request__AddTagsToListMember
} from "@heather-turano-coaching/domain";
import { ServiceError } from "../../utils/ServiceError";
// import { isMailchimpError } from "../../utils/util";
import { mailchimpBaseUrl, mailchimpHeaders } from "../../configs";

/**
 * DO NOT USE
 *
 * Adds tags to an existing member.
 *
 * DOES NOT WORK RIGHT NOW BECAUSE THIS MC API ENDPOINT IS FUUUUUUUUCKED
 * https://stackoverflow.com/questions/52496160/add-tags-to-mailchimp-subscriber-created-via-api-php
 *
 * Playground LIST ID?
 *
 * @param member Mailchimp member
 * @param tags Array of tags
 */
export const addTagsToMailchimpListMember = async (
  member: MailchimpListMember,
  tags: Mailchimp__Request__AddTagsToListMember[]
): Promise<void> => {
  try {
    const url = `${mailchimpBaseUrl}/lists/${member.list_id}/members/${member.email_address}/tags`;

    await fetch(url, {
      method: "POST",
      headers: mailchimpHeaders,
      body: JSON.stringify(tags)
    });
  } catch ({ code, message, context }) {
    throw new ServiceError("SERVER ERROR", message, context);
  }
};

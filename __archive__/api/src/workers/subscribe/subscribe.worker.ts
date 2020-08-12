import { addSubscriberToMailchimpAudience } from "./subscribe.service";
import { ResponseFailure, ResponseSuccess } from "../../utils/response";
import { parseRequestBody } from "../../utils/util";
import { SubscribeRequest } from "@heather-turano-coaching/domain";

/**
 * Subscribe to a mailchimp audience from the Live Life Mindful blog
 *
 * @param request
 */
export async function subscribeToBlog(request: Request): Promise<Response> {
  try {
    const requestBody = await parseRequestBody<SubscribeRequest>(request);
    const userResponse = await addSubscriberToMailchimpAudience(requestBody);

    return ResponseSuccess(200, userResponse);
  } catch ({ code, message, context }) {
    return ResponseFailure({
      code: code,
      errorMessage: message,
      errorContext: context
    });
  }
}

export const subscribeToBlogPreflight = async (): Promise<Response> =>
  ResponseSuccess(200);

/**
 * Subscribe to a mailchimp audience from the 100 Days Portal
 * Adds the person into the audience and tags them with the
 * "Mindful Movement 100" tag
 * @param request
 */
export async function subscribeTo100Days(request: Request): Promise<Response> {
  try {
    const requestBody = await parseRequestBody<SubscribeRequest>(request);
    const userResponse = await addSubscriberToMailchimpAudience(requestBody, [
      "Mindful Movement 100"
    ]);

    return ResponseSuccess(200, userResponse);
  } catch ({ code, message, context }) {
    return ResponseFailure({
      code: code,
      errorMessage: message,
      errorContext: context
    });
  }
}

export const subscribeTo100DaysPreflight = async (): Promise<Response> =>
  ResponseSuccess(200);

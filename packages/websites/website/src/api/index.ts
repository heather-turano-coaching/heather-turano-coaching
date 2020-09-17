import { HookApiRequest } from "@heather-turano-coaching/core/hooks";
import {
  QuickContactRequest,
  QuickContactResponse,
  SubscribeRequest,
  SubscribeResponse,
  makeEndpoint
} from "@heather-turano-coaching/domain";

export const subscribeToBlog: HookApiRequest<
  SubscribeRequest,
  SubscribeResponse
> = (body) => ({
  url: makeEndpoint("subscribe/blog"),
  options: {
    method: "POST",
    data: body
  }
});

export const sendQuickContactRequest: HookApiRequest<
  QuickContactRequest,
  QuickContactResponse
> = (body) => ({
  url: makeEndpoint("contact/quick"),
  options: {
    method: "POST",
    data: body
  }
});

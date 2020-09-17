import { HookApiRequest } from "@heather-turano-coaching/core/hooks";
import {
  SubscribeRequest,
  SubscribeResponse,
  makeEndpoint
} from "@heather-turano-coaching/domain";

export const subscribeToBlog: HookApiRequest<
  SubscribeRequest,
  SubscribeResponse
> = (body) => ({
  url: makeEndpoint("subscribe/hundred-days"),
  options: {
    method: "POST",
    data: body
  }
});

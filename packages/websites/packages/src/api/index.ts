import {
  SubscribeRequest,
  SubscribeResponse,
  makeEndpoint,
} from "@heather-turano-coaching/domain";
import { HookApiRequest } from "@heather-turano-coaching/hooks";

export const subscribeToBlog: HookApiRequest<
  SubscribeRequest,
  SubscribeResponse
> = (body) => ({
  url: makeEndpoint("subscribe/hundred-days"),
  options: {
    method: "POST",
    data: body,
  },
});

import { convertParamsToQueryString } from "@htc/utils";
import eventbrite from "eventbrite";

import { EBEventsResponse } from "./eventbrite.types";

export const eventbriteApi = eventbrite({
  token: process.env.HTC_EVENTBRITE_PRIVATE_TOKEN
});

const htcEventsUrl = (params?: Record<string, unknown>) =>
  `/organizations/${process.env.HTC_EVENTBRITE_ORG_ID}/events/${
    params ? convertParamsToQueryString(params) : ""
  }`;

export const getAllEventbriteEvents = async () =>
  eventbriteApi.request(htcEventsUrl()) as Promise<EBEventsResponse>;

export const getFutureEventbriteEvents = async () =>
  eventbriteApi.request(
    htcEventsUrl({
      status: "live"
    })
  ) as Promise<EBEventsResponse>;

export const getPastEventbriteEvents = async () =>
  eventbriteApi.request(
    htcEventsUrl({
      status: "completed,ended"
    })
  ) as Promise<EBEventsResponse>;

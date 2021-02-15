import { api } from "../api";
import { getEndpoint } from "../endpoint";
import { EBEventsResponse } from "./eventbrite.types";

export const getAllEventbriteEvents = async () =>
  api.get<EBEventsResponse>(
    getEndpoint({
      root: "/events"
    })
  );

export const getFutureEventbriteEvents = async () =>
  api.get<EBEventsResponse>(
    getEndpoint({
      root: "/events",
      queryParams: {
        status: "live"
      }
    })
  );

export const getPastEventbriteEvents = async () =>
  api.get<EBEventsResponse>(
    getEndpoint({
      root: "/events",
      queryParams: {
        status: "completed,ended"
      }
    })
  );

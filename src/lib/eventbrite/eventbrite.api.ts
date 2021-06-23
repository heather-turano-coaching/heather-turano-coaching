import { apiClient } from "../api";
import { getEndpoint } from "../endpoint";
import { EBEventsResponse } from "./eventbrite.types";

export const getAllEventbriteEvents = async () =>
  apiClient.get<EBEventsResponse>(
    getEndpoint({
      root: "/events"
    })
  );

export const getFutureEventbriteEvents = async () =>
  apiClient.get<EBEventsResponse>(
    getEndpoint({
      root: "/events",
      queryParams: {
        status: "live"
      }
    })
  );

export const getPastEventbriteEvents = async () =>
  apiClient.get<EBEventsResponse>(
    getEndpoint({
      root: "/events",
      queryParams: {
        status: "completed,ended"
      }
    })
  );

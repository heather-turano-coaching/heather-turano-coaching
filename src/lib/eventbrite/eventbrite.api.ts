import { api } from "../api";
import { getEndpoint } from "../endpoint";
import { EBEventsResponse } from "./eventbrite.types";

export const getAllEventbriteEvents = async () =>
  api.get<EBEventsResponse>(
    getEndpoint({
      root: "/events"
    })
  );

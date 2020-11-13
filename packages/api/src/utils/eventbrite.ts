import eventbrite from "eventbrite";

import { NexusGenRootTypes } from "../../model";

export const eventbriteClient = eventbrite({
  token: process.env.HTC_EVENTBRITE_PRIVATE_TOKEN
});

const htcOrgId = process.env.HTC_EVENTBRITE_ORG_ID as string;

type GetAllEventsResponse = Promise<NexusGenRootTypes["Events"]>;

export const getAllCurrentFutureEvents = async (): GetAllEventsResponse => {
  try {
    const paginatedEvents = await eventbriteClient.request(
      `/organizations/${htcOrgId}/events/?order_by=start_asc&time_filter=current_future`
    );
    return paginatedEvents as GetAllEventsResponse;
  } catch (error) {
    throw error;
  }
};

export const getAllPastEvents = async (): GetAllEventsResponse => {
  try {
    const paginatedEvents = await eventbriteClient.request(
      `/organizations/${htcOrgId}/events/?order_by=start_asc&time_filter=past`
    );
    return paginatedEvents as GetAllEventsResponse;
  } catch (error) {
    throw error;
  }
};

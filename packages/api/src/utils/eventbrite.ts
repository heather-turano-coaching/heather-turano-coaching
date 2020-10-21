import eventbrite from "eventbrite";

export const eventbriteClient = eventbrite({
  token: process.env.HTC_EVENTBRITE_PRIVATE_TOKEN
});

const htcOrgId = process.env.HTC_EVENTBRITE_ORG_ID as string;

type MultipartText = {
  text: string;
  html: string;
};

type Event = {
  name: MultipartText;
};

type Pagination = {
  object_count: number;
  page_number: number;
  page_size: number;
  page_count: number;
  has_more_items: boolean;
};

type Paginate<Obj> = { pagination: Pagination } & Obj;

type GetAllEventsResponse = Promise<Paginate<{ events: Event[] }>>;

export const getAllEvents = async (): GetAllEventsResponse => {
  try {
    const paginatedEvents = await eventbriteClient.request(
      `/organizations/${htcOrgId}/events`
    );
    return paginatedEvents as GetAllEventsResponse;
  } catch (error) {
    throw error;
  }
};

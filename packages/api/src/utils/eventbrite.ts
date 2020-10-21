import eventbrite from "eventbrite";

export const eventbriteClient = eventbrite({
  token: process.env.HTC_EVENTBRITE_PRIVATE_TOKEN
});

const htcOrgId = process.env.HTC_EVENTBRITE_ORG_ID as string;

type MultipartText = {
  text: string;
  html: string;
};

type DatetimeTz = {
  start: string;
  local: string;
  utc: string;
};

type Datetime = string;

type Status =
  | "draft"
  | "live"
  | "started"
  | "ended"
  | "completed"
  | "cancelled";

type Event = {
  name: MultipartText;
  summary?: string;
  description?: string;
  url: string;
  start: DatetimeTz;
  end: DatetimeTz;
  created: Datetime;
  changed: Datetime;
  published: Datetime;
  status: Status;
  currency: string;
  online_event: boolean;
  hide_start_date: boolean;
  hide_end_date: boolean;
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
      `/organizations/${htcOrgId}/events/?order_by=start_asc`
    );
    return paginatedEvents as GetAllEventsResponse;
  } catch (error) {
    throw error;
  }
};

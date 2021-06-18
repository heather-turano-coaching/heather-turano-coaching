import { getContentfulPageById } from "@htc/lib/contentful";
import {
  EBEventsResponse,
  getFutureEventbriteEvents,
  getPastEventbriteEvents
} from "@htc/lib/eventbrite";
import { GetPageData } from "@htc/lib/page";

const eventsPageId = "3yKGN5KGBDnt5fJDoJ43a7";

export type EventsPageProps = {
  futureEvents: EBEventsResponse;
  pastEvents: EBEventsResponse;
};

export const getEventsPageData: GetPageData<EventsPageProps> = async () => {
  const [contentfulPageData, futureEvents, pastEvents] = await Promise.all([
    getContentfulPageById(eventsPageId),
    getFutureEventbriteEvents(),
    getPastEventbriteEvents()
  ]);

  return {
    contentfulPageEntryId: eventsPageId,
    contentfulPageData,
    futureEvents: futureEvents.data,
    pastEvents: pastEvents.data
  };
};

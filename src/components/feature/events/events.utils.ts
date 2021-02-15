import { getContentfulPageById } from "@htc/lib/contentful";
import { EBEventsResponse } from "@htc/lib/eventbrite";
import { getAllEventbriteEvents } from "@htc/lib/eventbrite";
import { GetPageData } from "@htc/lib/page";

const eventsPageId = "3yKGN5KGBDnt5fJDoJ43a7";

export type EventsPageProps = {
  eventsData: EBEventsResponse;
};

export const getEventsPageData: GetPageData<EventsPageProps> = async () => {
  const [contentfulPageData, eventsData] = await Promise.all([
    getContentfulPageById(eventsPageId),
    getAllEventbriteEvents()
  ]);

  return {
    contentfulPageEntryId: eventsPageId,
    contentfulPageData,
    eventsData: eventsData.data
  };
};

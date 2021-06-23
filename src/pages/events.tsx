import {
  getFutureEventbriteEvents,
  getPastEventbriteEvents
} from "@htc/lib/eventbrite";
import { GetPageProps, PageComponent } from "@htc/lib/page";
import { getContentfulPageById } from "@htc/lib/server/contentful";
import React from "react";
import { EventsPage, EventsPageProps } from "src/features/events";
import { ContentfulSeo } from "src/features/seo";

const eventsContentfulPageId = "3yKGN5KGBDnt5fJDoJ43a7";

export const getStaticProps: GetPageProps<EventsPageProps> = async () => {
  try {
    const [contentfulPageData, futureEvents, pastEvents] = await Promise.all([
      getContentfulPageById(eventsContentfulPageId),
      getFutureEventbriteEvents(),
      getPastEventbriteEvents()
    ]);

    return {
      props: {
        contentfulPageEntryId: eventsContentfulPageId,
        contentfulPageData,
        futureEvents,
        pastEvents
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

const Page: PageComponent<EventsPageProps> = (props) => {
  return (
    <>
      <ContentfulSeo {...props} />
      <EventsPage {...props} />
    </>
  );
};

Page.getPageLayout = EventsPage.getPageLayout;

export default Page;

import {
  getFutureEventbriteEvents,
  getPastEventbriteEvents
} from "@htc/lib/eventbrite";
import { GetContentfulPageProps, PageComponent } from "@htc/lib/page";
import { getContentfulPageById } from "@htc/lib/server/contentful";
import React from "react";
import { EventsPage, EventsPageProps } from "src/features/events";
import { ContentfulSeo } from "src/features/seo";

export const getStaticProps: GetContentfulPageProps<EventsPageProps> = async ({
  preview = false
}) => {
  try {
    const [contentfulPageData, futureEvents, pastEvents] = await Promise.all([
      getContentfulPageById("3yKGN5KGBDnt5fJDoJ43a7", { preview }),
      getFutureEventbriteEvents(),
      getPastEventbriteEvents()
    ]);

    return {
      props: {
        preview,
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

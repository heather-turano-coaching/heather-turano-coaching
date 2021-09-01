import { withPage } from "@htc-website/features/page";
import {
  getFutureEventbriteEvents,
  getPastEventbriteEvents
} from "@htc-website/lib/eventbrite";
import { getContentfulPageById } from "@htc/contentful";
import { GetStaticProps } from "next";
import { EventsPage, EventsPageProps } from "src/features/events";

export const getStaticProps: GetStaticProps<EventsPageProps> = async ({
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
      },
      revalidate: 10
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default withPage(EventsPage);

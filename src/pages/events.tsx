import { GetPageProps, PageComponent } from "@htc/lib/page";
import React from "react";
import {
  EventsPage,
  EventsPageProps,
  getEventsPageData
} from "src/features/events";
import { ContentfulSeo } from "src/features/seo";

export const getStaticProps: GetPageProps<EventsPageProps> = async () => {
  try {
    const props = await getEventsPageData();

    return {
      props
    };
  } catch (error) {
    throw error;
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

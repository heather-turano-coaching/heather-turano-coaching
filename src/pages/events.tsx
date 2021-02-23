import {
  EventsPage,
  EventsPageProps,
  getEventsPageData
} from "@htc/components/feature/events";
import { ContentfulSeo } from "@htc/components/feature/seo";
import { GetPageProps, PageComponent } from "@htc/lib/page";
import React from "react";

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

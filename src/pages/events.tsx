import {
  EventsPage,
  EventsPageProps,
  getEventsPageData
} from "@htc/components/feature/events";
import { GetPageProps, PageComponent } from "@htc/lib/page";

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
  return <EventsPage {...props} />;
};

Page.getPageLayout = EventsPage.getPageLayout;

export default Page;

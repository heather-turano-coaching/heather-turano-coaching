import { IWebPage } from "@htc/domain";
import { EventsPage, EventsPageProps } from "components/feature/events";
import { getEntryById } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<EventsPageProps> = async () => {
  const pageContent = await getEntryById<IWebPage>("3yKGN5KGBDnt5fJDoJ43a7");

  return {
    props: {
      pageId: "3yKGN5KGBDnt5fJDoJ43a7",
      pageContent,
      allEvents: {
        futureEvents: {
          events: [],
          pagination: {}
        },
        pastEvents: {
          events: [],
          pagination: {}
        }
      }
    }
  };
};

const Page: PageComponent<EventsPageProps> = (props) => {
  return <EventsPage {...props} />;
};

Page.getPageLayout = EventsPage.getPageLayout;

export default Page;

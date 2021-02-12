import { EventsPage, EventsPageProps } from "@htc/components/feature/events";
import { IWebPage } from "@htc/domain/contentful";
import { getEntryById } from "@htc/lib/contentful";
import { PageComponent } from "@htc/lib/page";
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

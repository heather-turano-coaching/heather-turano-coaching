import {
  EventsPage,
  EventsPageProps,
  EventsPageQuery
} from "components/feature/events";
import { extractSsrResponse, initApollo } from "lib/apollo";
import { contentfulClient } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<EventsPageProps> = async () => {
  const apolloClient = initApollo<EventsPageProps>();
  const pageContent = (await contentfulClient.getEntry(
    "3yKGN5KGBDnt5fJDoJ43a7"
  )) as EventsPageProps["allEvents"];

  await apolloClient.query({
    query: EventsPageQuery
  });

  const { ROOT_QUERY } = extractSsrResponse<EventsPageProps>(apolloClient);

  return {
    props: {
      pageId: "3yKGN5KGBDnt5fJDoJ43a7",
      pageContent,
      ...ROOT_QUERY
    }
  };
};

const Page: PageComponent<EventsPageProps> = (props) => {
  return <EventsPage {...props} />;
};

Page.getPageLayout = EventsPage.getPageLayout;

export default Page;

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
    "6KgBUIkmyA0OzcHn7tjILl"
  )) as EventsPageProps["events"];

  await apolloClient.query({
    query: EventsPageQuery
  });

  const { ROOT_QUERY } = extractSsrResponse<EventsPageProps>(apolloClient);

  return {
    props: {
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

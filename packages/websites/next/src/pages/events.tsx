import {
  EventsPage,
  EventsPageProps,
  EventsPageQuery
} from "components/feature/events";
import { extractSsrResponse, initApollo } from "lib/apollo";
import { IPageEvents, contentfulClient } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<EventsPageProps> = async () => {
  const apolloClient = initApollo<EventsPageProps>();
  const pageContent = (await contentfulClient.getEntry(
    "6KgBUIkmyA0OzcHn7tjILl"
  )) as IPageEvents;

  await apolloClient.query({
    query: EventsPageQuery
  });

  const cache = extractSsrResponse<EventsPageProps>(apolloClient);

  console.log(JSON.stringify(cache, null, 4));

  return {
    props: {
      pageContent,
      ...cache.ROOT_QUERY
    }
  };
};

const Page: PageComponent<EventsPageProps> = (props) => {
  return <EventsPage {...props} />;
};

Page.getPageLayout = EventsPage.getPageLayout;

export default Page;

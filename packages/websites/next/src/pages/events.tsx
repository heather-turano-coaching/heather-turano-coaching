import { PageEvents } from "components/feature/events";
import { Meta, MetaProps } from "components/feature/meta";
import { IPageEvents, contentfulClient } from "lib/contentful";
import { GetStaticProps } from "next";

export type EventsProps = MetaProps & {
  data: IPageEvents;
};

export const getStaticProps: GetStaticProps<EventsProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "6KgBUIkmyA0OzcHn7tjILl"
  )) as IPageEvents;

  return {
    props: {
      pageTitle: "About",
      data
    }
  };
};

export default function EventsPage({ pageTitle, data }: EventsProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageEvents {...data} />
    </>
  );
}

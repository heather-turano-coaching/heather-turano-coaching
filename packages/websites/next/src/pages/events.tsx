import { PageEvents } from "components/feature/events";
import { Meta, MetaProps } from "components/feature/meta";
import { IPageEvents, contentfulClient } from "lib/contentful";
import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";

export type EventsProps = MetaProps & {
  data: IPageEvents;
};

export const getServerSideProps: GetServerSideProps<EventsProps> = async () => {
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

export default function EventsPage({
  pageTitle,
  data
}: EventsProps): ReactElement {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageEvents {...data} />
    </>
  );
}

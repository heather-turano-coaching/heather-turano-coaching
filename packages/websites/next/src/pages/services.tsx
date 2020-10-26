import { ServicesPage, ServicesPageProps } from "components/feature/services";
import { contentfulClient } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps<ServicesPageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "4E3pUa1xi3PTgVN5JocekM"
  )) as ServicesPageProps["data"];

  return {
    props: {
      pageTitle: "Services",
      data
    }
  };
};

const Page: PageComponent<ServicesPageProps> = (props) => {
  return <ServicesPage {...props} />;
};

Page.getPageLayout = ServicesPage.getPageLayout;

export default Page;

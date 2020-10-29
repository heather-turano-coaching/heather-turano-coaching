import { ServicesPage, ServicesPageProps } from "components/feature/services";
import { contentfulClient, getAllServices } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps<ServicesPageProps> = async () => {
  try {
    const pageData = (await contentfulClient.getEntry(
      "5oPRhGTzOaiUeiF8tTIHS5"
    )) as ServicesPageProps["pageData"];
    const services = await getAllServices();

    return {
      props: {
        pageId: "5oPRhGTzOaiUeiF8tTIHS5",
        pageData,
        services
      }
    };
  } catch (error) {
    throw error;
  }
};

const Page: PageComponent<ServicesPageProps> = (props) => {
  return <ServicesPage {...props} />;
};

Page.getPageLayout = ServicesPage.getPageLayout;

export default Page;

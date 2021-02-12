import {
  ServicesPage,
  ServicesPageProps
} from "@htc/components/feature/services";
import { IServiceFields, IWebPage } from "@htc/domain/contentful";
import { getEntriesById, getEntryById } from "@htc/lib/contentful";
import { PageComponent } from "@htc/lib/page";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps<ServicesPageProps> = async () => {
  const pageId = "5oPRhGTzOaiUeiF8tTIHS5";
  try {
    const [pageData, services] = await Promise.all<
      ServicesPageProps["pageData"],
      ServicesPageProps["services"]
    >([
      getEntryById<IWebPage>(pageId),
      getEntriesById<IServiceFields>("service")
    ]);

    return {
      props: {
        pageId,
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

import {
  ServicesPage,
  ServicesPageProps,
  getServicesPageData
} from "@htc/components/feature/services";
import { GetPageProps, PageComponent } from "@htc/lib/page";
import React from "react";

export const getStaticProps: GetPageProps<ServicesPageProps> = async () => {
  try {
    const props = await getServicesPageData();

    return {
      props
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

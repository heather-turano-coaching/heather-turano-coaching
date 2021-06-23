import { GetPageProps, PageComponent } from "@htc/lib/page";
import React from "react";
import { ContentfulSeo } from "src/features/seo";
import {
  ServicesPage,
  ServicesPageProps,
  getServicesPageData
} from "src/features/services";

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
  return (
    <>
      <ContentfulSeo {...props} />
      <ServicesPage {...props} />
    </>
  );
};

Page.getPageLayout = ServicesPage.getPageLayout;

export default Page;

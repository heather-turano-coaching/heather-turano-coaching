import { GetContentfulPageProps, PageComponent } from "@htc/lib/page";
import {
  IService,
  getContentfulEntriesById,
  getContentfulPageById
} from "@htc/lib/server/contentful";
import React from "react";
import { ContentfulSeo } from "src/features/seo";
import { ServicesPage, ServicesPageProps } from "src/features/services";

export const servicesPageId = "5oPRhGTzOaiUeiF8tTIHS5";

export const getStaticProps: GetContentfulPageProps<ServicesPageProps> =
  async ({ preview = false }) => {
    try {
      const [contentfulPageData, services] = await Promise.all([
        getContentfulPageById(servicesPageId, { preview }),
        getContentfulEntriesById<IService>("service", { preview })
      ]);

      return {
        props: {
          preview,
          contentfulPageData: contentfulPageData,
          services
        }
      };
    } catch (error) {
      return {
        notFound: true
      };
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

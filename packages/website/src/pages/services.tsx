import { withPage } from "@htc-website/features/page";
import {
  IService,
  getContentfulEntriesById,
  getContentfulPageById
} from "@htc-website/lib/server/contentful";
import { GetStaticProps } from "next";
import { ServicesPage, ServicesPageProps } from "src/features/services";

export const servicesPageId = "5oPRhGTzOaiUeiF8tTIHS5";

export const getStaticProps: GetStaticProps<ServicesPageProps> = async ({
  preview = false
}) => {
  try {
    const [contentfulPageData, services] = await Promise.all([
      getContentfulPageById(servicesPageId, { preview }),
      getContentfulEntriesById<IService>("service", { preview })
    ]);

    return {
      props: {
        preview,
        contentfulPageData,
        services
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default withPage<ServicesPageProps>(ServicesPage);

import {
  IServiceFields,
  getContentfulEntriesById,
  getContentfulPageById
} from "@htc/lib/contentful";
import { GetPageData } from "@htc/lib/page";

import { ServicesPageProps } from "./Services.page";

export const servicesPageId = "5oPRhGTzOaiUeiF8tTIHS5";

export const getServicesPageData: GetPageData<ServicesPageProps> = async () => {
  const [contentfulPageData, services] = await Promise.all([
    getContentfulPageById(servicesPageId),
    getContentfulEntriesById<IServiceFields>("service")
  ]);

  return {
    contentfulPageEntryId: servicesPageId,
    contentfulPageData: contentfulPageData,
    services
  };
};

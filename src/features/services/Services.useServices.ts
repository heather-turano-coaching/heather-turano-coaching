/* eslint-disable @typescript-eslint/no-unused-vars */
import { IService, IServiceFields } from "@htc/lib/contentful";
import { getAllServices } from "@htc/lib/contentful";
import { ContentfulPagination } from "@htc/lib/contentful/contentful.types.custom";
import { Entry } from "contentful";
import useSWR from "swr";

type GroupedServicesType = {
  [key in IServiceFields["category"]]: Entry<IServiceFields>[];
};

type UseServicesReturn = {
  groupedServices: GroupedServicesType | undefined;
};

export const useServices = (
  services: ContentfulPagination<IService>
): UseServicesReturn => {
  const { data } = useSWR<ContentfulPagination<IService>>(
    "services",
    getAllServices,
    {
      initialData: services
    }
  );

  const groupedServices = data?.items.reduce<GroupedServicesType>(
    (accum, d) => {
      const key = d.fields.category;

      if (accum[key]) {
        return {
          ...accum,
          [key]: [...accum[key], d]
        };
      }
      return {
        ...accum,
        [key]: [d]
      };
    },
    {} as GroupedServicesType
  );

  return { groupedServices };
};

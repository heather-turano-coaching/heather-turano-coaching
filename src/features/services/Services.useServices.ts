import { IService, IServiceFields } from "@htc/lib/server/contentful";
import { ContentfulPagination } from "@htc/lib/server/contentful/contentful.types.custom";
import { Entry } from "contentful";

type GroupedServicesType = {
  [key in IServiceFields["category"]]: Entry<IServiceFields>[];
};

type UseServicesReturn = {
  groupedServices: GroupedServicesType | undefined;
};

export const useServices = (
  services: ContentfulPagination<IService>
): UseServicesReturn => {
  const groupedServices = services.items.reduce<GroupedServicesType>(
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

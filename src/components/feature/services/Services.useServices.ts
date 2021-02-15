/* eslint-disable @typescript-eslint/no-unused-vars */
import { IServiceFields } from "@htc/lib/contentful";
import { getAllServices } from "@htc/lib/contentful";
import { Entry, EntryCollection } from "contentful";
import useSWR from "swr";

type GroupedServicesType = {
  [key in IServiceFields["category"]]: Entry<IServiceFields>[];
};

type UseServicesReturn = {
  groupedServices: GroupedServicesType | undefined;
};

export const useServices = (
  services: EntryCollection<IServiceFields>
): UseServicesReturn => {
  const { data } = useSWR<EntryCollection<IServiceFields>>(
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

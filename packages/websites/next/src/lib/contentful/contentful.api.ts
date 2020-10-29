import {
  IServiceFields,
  IWebPageFields
} from "@heather-turano-coaching/domain";
import { EntryCollection, createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";

import { throwError } from "../utils";

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_HTC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_HTC_CONTENTFUL_ACCESS_TOKEN,
  resolveLinks: true
});

export const getAllContentfulPages = async (): Promise<
  EntryCollection<IWebPageFields>
> => {
  try {
    const data = await contentfulClient.getEntries<IWebPageFields>({
      content_type: "webPage",
      include: 10
    });
    return data;
  } catch (error) {
    throwError("There was a problem when trying to fetch the pages", error);
  }
};

export const getEntriesById = async <T>(
  id: string,
  query?: Record<string, string>
) => {
  try {
    const rawData = await contentfulClient.getEntries<T>({
      content_type: id,
      include: 10,
      ...query
    });
    const stringifiedData = safeJsonStringify(rawData);
    const data = JSON.parse(stringifiedData);
    return data;
  } catch (error) {
    throwError(
      `There was a problem when trying to fetch the entries of" ${id}"`,
      error
    );
  }
};

export const getAllServices = async () =>
  await getEntriesById<IServiceFields>("service");

export const getEntryById = async <T>(id: string) => {
  try {
    const data = await contentfulClient.getEntry(id, {
      include: 10
    });
    return (data as unknown) as T;
  } catch (error) {
    throwError(
      `There was a problem when trying to fetch page with ID "${id}"`,
      error
    );
  }
};

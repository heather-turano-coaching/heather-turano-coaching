import { Entry, EntryCollection, createClient } from "contentful";

import { throwError } from "../utils";
import { IWebPage, IWebPageFields } from "./contentful.model";

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

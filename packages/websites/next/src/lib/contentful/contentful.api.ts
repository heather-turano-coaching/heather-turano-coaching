import { Entry, EntryCollection, createClient } from "contentful";

import { throwError } from "../utils";
import { IWebPage, IWebPageFields } from "./contentful.model";

export const contentfulClient = createClient({
  space: process.env.HTC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.HTC_CONTENTFUL_ACCESS_TOKEN
});

export const getAllContentfulPages = async (): Promise<
  EntryCollection<IWebPageFields>
> => {
  try {
    const data = await contentfulClient.getEntries<IWebPageFields>({
      content_type: "webPage"
    });
    return data;
  } catch (error) {
    throwError("There was a problem when trying to fetch the pages", error);
  }
};

export const getEntryById = async <T>(id: string) => {
  try {
    const data = await contentfulClient.getEntry(id);
    return (data as unknown) as T;
  } catch (error) {
    throwError(
      `There was a problem when trying to fetch page with ID "${id}"`,
      error
    );
  }
};

export const getBlogPage = async (): Promise<Entry<IWebPage>> => {
  try {
    const data = await contentfulClient.getEntry<IWebPage>(
      "59srkQjfP5rxJfLwLe6nIZ"
    );
    return data;
  } catch (error) {
    throwError(
      "There was a problem when trying to get the blog page data",
      error
    );
  }
};

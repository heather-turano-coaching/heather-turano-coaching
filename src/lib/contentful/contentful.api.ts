import { formatError } from "@htc/utils";
import { createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";

import { IServiceFields, IWebPage, IWebPageFields } from "./contentful.types";

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_HTC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_HTC_CONTENTFUL_ACCESS_TOKEN,
  resolveLinks: true
});

/**
 * GENERICS
 *
 * Use the below functions to compose other more specific
 * endpoints for ease of use with the contentful API
 */

/**
 * Get a single content entry from contentful by ID
 */
export const getContentfulEntryById = async <T>(id: string) => {
  try {
    const data = await contentfulClient.getEntry<T>(id, {
      include: 10
    });
    // Needed because some types are cast to specific strings
    // rather than a generic string
    return (data as unknown) as T;
  } catch (error) {
    throw new Error(
      formatError(
        `There was a problem when trying to fetch page with ID "${id}"`,
        error
      )
    );
  }
};

/**
 * Get a collection of contentful content entries
 * by their ID. This ID comes from the contentful UI
 */
export const getContentfulEntriesById = async <T>(
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
    throw new Error(
      formatError(
        `There was a problem when trying to fetch the entries of" ${id}"`,
        error
      )
    );
  }
};

/**
 * SPECIFICS
 *
 * Use these functions to fetch specifics parts of data. Typically
 * these should be contentful API methods that are used in multiple places
 * like getting a page data or getting collection of pages
 */

export const getAllContentfulPages = async () => {
  try {
    const data = await contentfulClient.getEntries<IWebPageFields>({
      content_type: "webPage",
      include: 10
    });
    return data;
  } catch (error) {
    throw new Error(
      formatError("There was a problem when trying to fetch the pages", error)
    );
  }
};

/**
 * Gets the data of the page from Contentful. Use when
 * trying to get the most updated data.
 */
export const getContentfulPageById = async (pageId: string) =>
  await getContentfulEntryById<IWebPage>(pageId);

export const getAllServices = async () =>
  await getContentfulEntriesById<IServiceFields>("service");

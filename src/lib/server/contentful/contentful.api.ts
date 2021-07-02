import { formatError } from "@htc/utils";
import { createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";

import { IService, IWebPage, IWebPageFields } from "./contentful.types";
import { ContentfulPagination } from "./contentful.types.custom";

export const contentfulPreviewClient = createClient({
  host: "preview.contentful.com",
  space: process.env.HTC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.HTC_CONTENTFUL_API_PREVIEW_ACCESS_TOKEN,
  resolveLinks: true
});

export const contentfulClient = createClient({
  space: process.env.HTC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.HTC_CONTENTFUL_API_CONTENT_ACCESS_TOKEN,
  resolveLinks: true
});

const getContentfulApiClient = (preview: boolean) =>
  preview || process.env.NODE_ENV === "development"
    ? contentfulPreviewClient
    : contentfulClient;

type ContentfulApiOptions = {
  preview: boolean;
  query?: Record<string, string>;
};
/**
 * GENERICS
 *
 * Use the below functions to compose other more specific
 * endpoints for ease of use with the contentful API
 */

/**
 * Get a single content entry from contentful by ID
 */
export const getContentfulEntryById = async <T>(
  id: string,
  options: ContentfulApiOptions
) => {
  const apiClient = getContentfulApiClient(options.preview);
  try {
    const data = await apiClient.getEntry<T>(id, {
      include: 10
    });
    // Needed because some types are cast to specific strings
    // rather than a generic string
    return data as unknown as T;
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
  options: ContentfulApiOptions
): Promise<ContentfulPagination<T>> => {
  const { query = {} } = options;
  const apiClient = getContentfulApiClient(options.preview);

  try {
    const rawData = await apiClient.getEntries<T>({
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

export const getAllContentfulPages = async (options: ContentfulApiOptions) => {
  const apiClient = getContentfulApiClient(options.preview);

  try {
    const data = await apiClient.getEntries<IWebPageFields>({
      content_type: "webPage",
      include: 10
    });
    return data;
  } catch (error) {
    throw new Error(
      formatError(
        `Error when running "getAllContentfulPages"`,
        JSON.stringify(error)
      )
    );
  }
};

/**
 * Gets the data of the page from Contentful. Use when
 * trying to get the most updated data.
 */
export const getContentfulPageById = async (
  pageId: string,
  options: ContentfulApiOptions
) => await getContentfulEntryById<IWebPage>(pageId, options);

/**
 * Gets all of the contentful pages by their URL
 */
export const getContentfulPageBySlug = async (
  slug: string,
  options: ContentfulApiOptions
) => {
  const apiClient = getContentfulApiClient(options.preview);

  return apiClient.getEntries<ContentfulPagination<IWebPage>>({
    content_type: "webPage",
    "fields.url": slug,
    include: 10
  });
};

export const getAllServices = async (options: ContentfulApiOptions) =>
  await getContentfulEntriesById<IService>("service", options);

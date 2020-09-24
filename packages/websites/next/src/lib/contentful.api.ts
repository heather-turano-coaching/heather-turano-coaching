import { createClient } from "contentful";

import { IPageBlog } from "./contentful";
import { throwError } from "./utils";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getBlogPage = async (): Promise<IPageBlog> => {
  try {
    const data = (await contentfulClient.getEntry(
      "59srkQjfP5rxJfLwLe6nIZ"
    )) as IPageBlog;
    return data;
  } catch (error) {
    throwError(
      "There was a problem when trying to get the blog page data",
      error
    );
  }
};

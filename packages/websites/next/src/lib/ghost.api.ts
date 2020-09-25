import GhostContentAPI, {
  PostOrPage,
  PostsOrPages
} from "@tryghost/content-api";

import { throwError } from "./utils";

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_NEXT_CONTENT_API_KEY,
  version: "v3"
});

export const getFeaturedPost = async (): Promise<PostOrPage> => {
  try {
    const featuredPosts = await ghostClient.posts.browse({
      include: ["authors", "tags"],
      filter: ["featured:true"]
    });
    return featuredPosts[0];
  } catch (error) {
    throwError("There was an error when trying to get a featured post", error);
  }
};

export const getAllPosts = async (page = 1): Promise<PostsOrPages> => {
  try {
    const posts = await ghostClient.posts.browse({
      include: ["authors", "tags"],
      filter: ["featured:-true"],
      limit: 6,
      page
    });
    return posts;
  } catch (error) {
    throwError(
      "There was an error when trying to get all of the blog posts",
      error
    );
  }
};

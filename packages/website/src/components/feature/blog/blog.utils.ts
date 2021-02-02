import { IWebPage } from "@heather-turano-coaching/domain";
import { getEntryById } from "lib/contentful";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostFetcher
} from "lib/ghost.api";

export const blogPageId = "7inppspqzOyqyHJ9r8viIj";

export const getBlogPageData = async () => {
  const [data, featuredPosts, allPosts] = await Promise.all([
    getEntryById<IWebPage>("7inppspqzOyqyHJ9r8viIj"),
    ghostFetcher<GetFeaturedGhostPost>(getGhostFeaturedPostEndpoint),
    ghostFetcher<GetAllGhostPosts>(getAllGhostPostsEndpoint(1))
  ]);
  return { data, featuredPosts, allPosts };
};

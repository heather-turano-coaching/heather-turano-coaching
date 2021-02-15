import { getContentfulPageById } from "@htc/lib/contentful";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { GetPageData } from "@htc/lib/page";

import { BlogPageProps } from "./Blog.page";

export const blogPageId = "7inppspqzOyqyHJ9r8viIj";

export const getBlogPageData: GetPageData<BlogPageProps> = async () => {
  const [contentfulPageData, featuredPost, allPosts] = await Promise.all([
    getContentfulPageById(blogPageId),
    ghostClient<GetFeaturedGhostPost>(getGhostFeaturedPostEndpoint),
    ghostClient<GetAllGhostPosts>(
      getAllGhostPostsEndpoint({
        page: 1
      })
    )
  ]);

  return {
    contentfulPageEntryId: blogPageId,
    contentfulPageData,
    featuredPost,
    allPosts
  };
};
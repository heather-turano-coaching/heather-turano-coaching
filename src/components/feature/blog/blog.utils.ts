import { api } from "@htc/lib/api";
import { getContentfulPageById } from "@htc/lib/contentful";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getGhostFeaturedPostEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { GetPageData } from "@htc/lib/page";

import { BlogPageProps } from "./Blog.page";

export const blogPageId = "7inppspqzOyqyHJ9r8viIj";

export const getBlogPageData: GetPageData<
  BlogPageProps,
  { pageNum?: string }
> = async (params) => {
  const [contentfulPageData, featuredPosts, allPosts] = await Promise.all([
    getContentfulPageById(blogPageId),
    ghostClient<GetFeaturedGhostPost>(getGhostFeaturedPostEndpoint),
    api.get<GetAllGhostPosts>(`/posts?page=${params?.pageNum || 1}`)
  ]);

  return {
    contentfulPageEntryId: blogPageId,
    contentfulPageData,
    featuredPosts,
    allPosts: allPosts.data
  };
};

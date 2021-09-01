import { BlogPage, BlogPageProps } from "@htc-website/features/blog";
import { withPage } from "@htc-website/features/page";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostClient
} from "@htc-website/lib/ghost";
import { getContentfulPageById } from "@htc/contentful";
import { GetStaticProps } from "next";

export const blogPageId = "7inppspqzOyqyHJ9r8viIj";

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
  preview = false
}) => {
  try {
    const [contentfulPageData, featuredPosts, allPosts] = await Promise.all([
      getContentfulPageById(blogPageId, { preview }),
      ghostClient<GetFeaturedGhostPost>(getGhostFeaturedPostEndpoint),
      ghostClient<GetAllGhostPosts>(
        getAllGhostPostsEndpoint({
          page: params?.pageNum ? Number(params.pageNum) : 1
        })
      )
    ]);

    return {
      props: {
        preview,
        contentfulPageData,
        featuredPosts,
        allPosts
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default withPage<BlogPageProps>(BlogPage);

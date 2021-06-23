import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { GetPageProps, PageComponent } from "@htc/lib/page";
import { getContentfulPageById } from "@htc/lib/server/contentful";
import React from "react";
import { BlogPage, BlogPageProps } from "src/features/blog";
import { ContentfulSeo } from "src/features/seo";

export const blogPageId = "7inppspqzOyqyHJ9r8viIj";

export const getStaticProps: GetPageProps<BlogPageProps> = async ({
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
        contentfulPageEntryId: blogPageId,
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

const Page: PageComponent<BlogPageProps> = (props) => {
  return (
    <>
      <ContentfulSeo {...props} />
      <BlogPage {...props} />
    </>
  );
};

Page.getPageLayout = BlogPage.getPageLayout;

export default Page;

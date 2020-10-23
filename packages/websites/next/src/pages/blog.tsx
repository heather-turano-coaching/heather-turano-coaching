import { BlogPage, BlogPageProps } from "components/feature/blog";
import { getBlogPage } from "lib/contentful";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { PageComponent } from "lib/page";
import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const [data, featuredPosts, allPosts] = await Promise.all([
    getBlogPage(),
    ghostFetcher<GetFeaturedGhostPost>(getGhostFeaturedPostEndpoint),
    ghostFetcher<GetAllGhostPosts>(getAllGhostPostsEndpoint(1))
  ]);

  return {
    props: {
      data,
      featuredPosts,
      allPosts
    }
  };
};

const Page: PageComponent<BlogPageProps> = (props) => {
  return <BlogPage {...props} />;
};

Page.getPageLayout = BlogPage.getPageLayout;

export default Page;

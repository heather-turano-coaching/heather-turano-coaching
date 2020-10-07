import { PageBlog } from "components/feature/blog";
import { Meta } from "components/feature/meta";
import { IPageBlog, getBlogPage } from "lib/contentful";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { GetStaticProps } from "next";
import { ReactElement } from "react";

export type BlogPageProps = {
  data: IPageBlog;
  featuredPosts: GetFeaturedGhostPost;
  allPosts: GetAllGhostPosts;
};

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

export default function BlogPage(props: BlogPageProps): ReactElement {
  return (
    <>
      <Meta pageTitle="Blog" />
      <PageBlog {...props} />
    </>
  );
}

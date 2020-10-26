import { BlogPostPage, BlogPostPageProps } from "components/feature/blog";
import { getEndpoint } from "lib/endpoint.utils";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { PageComponent } from "lib/page";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (
  context
) => {
  const slug = context.params.slug as string;

  const post = await ghostFetcher<GetSingleGhostPostBySlug>(
    getSingleGhostPostBySlugEndpoint(slug)
  );

  return {
    props: {
      post: post.posts[0]
    }
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const allSlugs = await ghostFetcher<{ posts: { slug: string }[] }>(
    getEndpoint({
      root: "/posts",
      queryParams: {
        fields: "slug"
      }
    })
  );

  return {
    fallback: true,
    paths: allSlugs.posts.map((slug) => ({
      params: slug
    }))
  };
};

const Page: PageComponent<BlogPostPageProps> = (props) => {
  return <BlogPostPage {...props} />;
};

Page.getPageLayout = BlogPostPage.getPageLayout;

export default Page;

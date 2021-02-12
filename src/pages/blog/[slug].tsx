import { BlogPostPage, BlogPostPageProps } from "components/feature/blog";
import { getEndpoint } from "lib/endpoint.utils";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostFetcher
} from "lib/ghost/ghost.api";
import { PageComponent } from "lib/page";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

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
    paths: allSlugs.posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params
}) => {
  const slug = params.slug as string;

  try {
    const post = await ghostFetcher<
      GetSingleGhostPostBySlug & { slug: string }
    >(getSingleGhostPostBySlugEndpoint(slug));

    return {
      props: {
        slug,
        post: post.posts[0]
      }
    };
  } catch {
    throw new Error(
      `There was an issue in retrieving the post at slug: "${slug}"`
    );
  }
};

const Page: PageComponent<BlogPostPageProps> = (props) => {
  return <BlogPostPage {...props} />;
};

Page.getPageLayout = BlogPostPage.getPageLayout;

export default Page;

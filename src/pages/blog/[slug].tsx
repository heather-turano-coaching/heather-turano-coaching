import { getEndpoint } from "@htc/lib/endpoint";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { PageComponent } from "@htc/lib/page";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { BlogPostPage, BlogPostPageProps } from "src/features/blog";
import { GhostSeo } from "src/features/seo";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const allSlugs = await ghostClient<{ posts: { slug: string }[] }>(
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
  const slug = params?.slug as string;

  try {
    const post = await ghostClient<GetSingleGhostPostBySlug & { slug: string }>(
      getSingleGhostPostBySlugEndpoint(slug)
    );

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
  return (
    <>
      <GhostSeo {...props} />
      <BlogPostPage {...props} />
    </>
  );
};

Page.getPageLayout = BlogPostPage.getPageLayout;

export default Page;

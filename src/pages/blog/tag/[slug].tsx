import { getEndpoint } from "@htc/lib/endpoint";
import {
  GetAllGhostPosts,
  getAllGhostPostsByTagSlugEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { GetGhostPageProps, PageComponent } from "@htc/lib/page";
import { GetStaticPaths } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { BlogTagPage, BlogTagPageProps } from "src/features/blog";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const allSlugs = await ghostClient<{ tags: { slug: string }[] }>(
    getEndpoint({
      root: "/tags",
      queryParams: {
        limit: "all"
      }
    })
  );

  return {
    paths: allSlugs.tags.map((tag) => ({
      params: {
        slug: tag.slug
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetGhostPageProps<BlogTagPageProps> = async ({
  params,
  preview = false
}) => {
  const slug = params?.slug as string;

  try {
    const posts = await ghostClient<GetAllGhostPosts>(
      getAllGhostPostsByTagSlugEndpoint(slug)
    );

    return {
      props: {
        preview,
        slug,
        data: posts
      }
    };
  } catch (e) {
    throw new Error(
      `There was an issue in retrieving the posts at tag slug: "${slug}": ${JSON.stringify(
        e,
        null,
        4
      )}`
    );
  }
};

const Page: PageComponent<BlogTagPageProps> = (props) => {
  return (
    <>
      <NextSeo
        title={props.slug}
        description={`Read the latest posts from Heather that are tagged with "${props.slug}"`}
      />
      <BlogTagPage {...props} />
    </>
  );
};

Page.getPageLayout = BlogTagPage.getPageLayout;

export default Page;

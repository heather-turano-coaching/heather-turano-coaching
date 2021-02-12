import { BlogTagPage, BlogTagPageProps } from "@htc/components/feature/blog";
import { PageComponent } from "@htc/lib/page";
import { getEndpoint } from "lib/endpoint.utils";
import {
  GetAllGhostPosts,
  getAllGhostPostsByTagSlugEndpoint,
  ghostFetcher
} from "lib/ghost/ghost.api";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const allSlugs = await ghostFetcher<{ tags: { slug: string }[] }>(
    getEndpoint({
      root: "/tags",
      queryParams: {
        fields: "slug",
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

export const getStaticProps: GetStaticProps<BlogTagPageProps> = async ({
  params
}) => {
  const slug = params.slug as string;

  try {
    const posts = await ghostFetcher<GetAllGhostPosts>(
      getAllGhostPostsByTagSlugEndpoint(slug)
    );

    return {
      props: {
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
  return <BlogTagPage {...props} />;
};

Page.getPageLayout = BlogTagPage.getPageLayout;

export default Page;

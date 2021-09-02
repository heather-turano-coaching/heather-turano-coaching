import { BlogTagPage, BlogTagPageProps } from "@htc-website/features/blog-tag";
import { getEndpoint } from "@htc-website/lib/endpoint";
import {
  GetAllGhostPosts,
  getAllGhostPostsByTagSlugEndpoint,
  ghostClient
} from "@htc-website/lib/ghost";
import { withPage } from "@htc/components";
import { GetStaticPaths, GetStaticProps } from "next";

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

export const getStaticProps: GetStaticProps<BlogTagPageProps> = async ({
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

export default withPage<BlogTagPageProps>(BlogTagPage);

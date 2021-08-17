import { BlogPostPage, BlogPostPageProps } from "@htc/features/blog-post";
import { withPage } from "@htc/features/page";
import { getEndpoint } from "@htc/lib/endpoint";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const allSlugs = await ghostClient<{ posts: { slug: string }[] }>(
    getEndpoint({
      root: "/posts",
      queryParams: {
        fields: "slug",
        limit: "all"
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
  params,
  preview = false
}) => {
  const slug = params?.slug as string;

  try {
    const post = await ghostClient<GetSingleGhostPostBySlug & { slug: string }>(
      getSingleGhostPostBySlugEndpoint(slug)
    );

    return {
      props: {
        preview,
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

export default withPage(BlogPostPage);

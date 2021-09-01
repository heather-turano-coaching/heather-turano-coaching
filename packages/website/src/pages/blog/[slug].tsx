import {
  BlogPostPage,
  BlogPostPageProps
} from "@htc-website/features/blog-post";
import { withPage } from "@htc-website/features/page";
import { getEndpoint } from "@htc-website/lib/endpoint";
import {
  GetGhostPostsWithFilter,
  GetSingleGhostPostBySlug,
  getAllGhostPostsByTagSlugEndpoint,
  getSingleGhostPostBySlugEndpoint,
  ghostClient
} from "@htc-website/lib/ghost";
import { PostOrPage } from "@tryghost/content-api";
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
    const blogPost = post.posts[0];
    if (blogPost.tags && blogPost.tags.length > 3) {
      const getSuggestedPosts1 = ghostClient<GetGhostPostsWithFilter>(
        getAllGhostPostsByTagSlugEndpoint(blogPost.tags[0].slug)
      );
      const getSuggestedPosts2 = ghostClient<GetGhostPostsWithFilter>(
        getAllGhostPostsByTagSlugEndpoint(blogPost.tags[1].slug)
      );
      const getSuggestedPosts3 = ghostClient<GetGhostPostsWithFilter>(
        getAllGhostPostsByTagSlugEndpoint(blogPost.tags[2].slug)
      );
      const [suggestedPosts1, suggestedPosts2, suggestedPosts3] =
        await Promise.all([
          getSuggestedPosts1,
          getSuggestedPosts2,
          getSuggestedPosts3
        ]);

      const allSuggestedPosts = [
        ...suggestedPosts1.posts,
        ...suggestedPosts2.posts,
        ...suggestedPosts3.posts
      ].reduce<PostOrPage[]>((accum, post) => {
        if (accum.length === 3) {
          return accum;
        }
        if (accum.find((addedPost) => addedPost.id === post.id)) {
          return accum;
        }
        if (post.id === blogPost.id) {
          return accum;
        }
        return [...accum, post];
      }, []);

      return {
        props: {
          preview,
          slug,
          post: post.posts[0],
          suggestedBlogPosts: allSuggestedPosts
        }
      };
    }

    return {
      props: {
        preview,
        slug,
        post: post.posts[0],
        suggestedBlogPosts: []
      }
    };
  } catch {
    throw new Error(
      `There was an issue in retrieving the post at slug: "${slug}"`
    );
  }
};

export default withPage(BlogPostPage);

import { withPage } from "@htc/features/page";
import {
  GetFeaturedGhostPost,
  GetLatestGhostPost,
  getGhostFeaturedPostEndpoint,
  getGhostLatestPostEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import {
  IPageCollection,
  getContentfulEntryById
} from "@htc/lib/server/contentful";
import { GetStaticProps } from "next";
import { LinksPage, LinksPageProps } from "src/features/links";

export const getStaticProps: GetStaticProps<LinksPageProps> = async ({
  preview = false
}) => {
  const [contentfulData, featuredPost, latestPost] = await Promise.all([
    getContentfulEntryById<IPageCollection>("fLki8QSTMOwrtx0rBqg4U", {
      preview
    }),
    ghostClient<GetFeaturedGhostPost>(getGhostFeaturedPostEndpoint),
    ghostClient<GetLatestGhostPost>(getGhostLatestPostEndpoint)
  ]);

  return {
    props: {
      contentfulData,
      featuredPost: featuredPost.posts[0] || null,
      latestPost: latestPost.posts[0] || null
    },
    revalidate: 10
  };
};

export default withPage(LinksPage);

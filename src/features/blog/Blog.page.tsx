import {
  BlogSection,
  BlogSectionAll,
  BlogSectionFeatured,
  Hero
} from "@htc/components/content";
import { ContentfulPageProps, FeaturePageComponent } from "@htc/features/page";
import { ContentfulSeo } from "@htc/features/seo";
import { GetAllGhostPosts, GetFeaturedGhostPost } from "@htc/lib/ghost";
import { Container } from "@material-ui/core";
import React from "react";

import { withBlogPageLayout } from "./Blog.layout";

export type BlogPageProps = ContentfulPageProps<{
  featuredPosts: GetFeaturedGhostPost;
  allPosts: GetAllGhostPosts;
}>;

export const BlogPage: FeaturePageComponent<BlogPageProps> = ({
  contentfulPageData,
  featuredPosts,
  allPosts
}) => {
  const {
    fields: { hero }
  } = contentfulPageData;
  return (
    <>
      <ContentfulSeo contentfulPageData={contentfulPageData} />
      {hero && <Hero {...hero.fields} />}
      <Container>
        <BlogSection title="Featured post">
          <BlogSectionFeatured
            {...(featuredPosts.posts[0] || allPosts.posts[0])}
          />
        </BlogSection>
        <BlogSection title="Older posts">
          <BlogSectionAll {...allPosts} />
        </BlogSection>
      </Container>
    </>
  );
};

BlogPage.withPageLayout = withBlogPageLayout;

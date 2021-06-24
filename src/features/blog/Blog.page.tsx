import { Hero } from "@htc/components/content";
import { GetAllGhostPosts, GetFeaturedGhostPost } from "@htc/lib/ghost";
import { PageComponent } from "@htc/lib/page";
import { Container } from "@material-ui/core";
import React from "react";

import { LayoutRoot } from "../layout";
import { BlogSection } from "./BlogSection";
import { BlogSectionAll } from "./BlogSectionAll";
import { BlogSectionFeatured } from "./BlogSectionFeatured";

export type BlogPageProps = {
  featuredPosts: GetFeaturedGhostPost;
  allPosts: GetAllGhostPosts;
};

export const BlogPage: PageComponent<BlogPageProps> = ({
  contentfulPageData: {
    fields: {
      hero: { fields: heroFields }
    }
  },
  featuredPosts,
  allPosts
}) => {
  return (
    <>
      <Hero {...heroFields} />
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

BlogPage.getPageLayout = function getPageLayout(page, { preview }) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};

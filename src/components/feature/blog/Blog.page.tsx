import { Title } from "@htc/components/atomic";
import { Hero } from "@htc/components/content";
import { GetAllGhostPosts, GetFeaturedGhostPost } from "@htc/lib/ghost";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { Container } from "@material-ui/core";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { BlogCardFeatured } from "./BlogCardFeatured";
import { BlogList } from "./BlogList";

export type BlogPageProps = {
  featuredPost: GetFeaturedGhostPost;
  allPosts: GetAllGhostPosts;
};

export const BlogPage: PageComponent<BlogPageProps> = ({
  contentfulPageData: {
    fields: {
      hero: { fields: heroFields }
    }
  },
  featuredPost,
  allPosts
}) => {
  return (
    <>
      <Hero {...heroFields} />
      <Container>
        <Title size="lg" copy="Featured post" />
        <BlogCardFeatured {...featuredPost} />
        <div
          css={css`
            margin-top: ${makeRem(200)};
          `}
        >
          <Title size="lg" copy="Older Posts" />
        </div>
        <BlogList {...allPosts} />
      </Container>
    </>
  );
};

BlogPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

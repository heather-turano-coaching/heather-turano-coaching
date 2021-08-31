import { Title } from "@htc/components/atomic";
import { BlogSectionAll } from "@htc/components/content";
import { GetAllGhostPosts } from "@htc/lib/ghost";
import { Container } from "@material-ui/core";
import { NextSeo } from "next-seo";
import React from "react";

import { FeaturePageComponent } from "../page";
import { withBlogTagPageLayout } from "./BlogTag.layout";

export type BlogTagPageProps = {
  slug: string;
  data: GetAllGhostPosts;
};

export const BlogTagPage: FeaturePageComponent<BlogTagPageProps> = ({
  slug,
  data
}) => {
  return (
    <>
      <NextSeo
        title={slug}
        description={`Read the latest posts from Heather that are tagged with "${slug}"`}
      />
      <Container maxWidth="lg">
        <Title size="lg">{slug}</Title>
        <BlogSectionAll {...data} />
      </Container>
    </>
  );
};

BlogTagPage.withPageLayout = withBlogTagPageLayout;

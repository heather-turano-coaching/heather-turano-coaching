import { BlogSectionAll } from "@htc-website/components";
import { GetAllGhostPosts } from "@htc-website/lib/ghost";
import { Container, Title } from "@htc/components";
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
      <Container>
        <Title size="lg">{slug}</Title>
        <BlogSectionAll {...data} />
      </Container>
    </>
  );
};

BlogTagPage.withPageLayout = withBlogTagPageLayout;

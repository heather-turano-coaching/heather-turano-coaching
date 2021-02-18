import { Title } from "@htc/components/atomic";
import { GetAllGhostPosts } from "@htc/lib/ghost";
import { PageComponent } from "@htc/lib/page";
import { Container } from "@material-ui/core";
import React from "react";

import { LayoutRoot } from "../layout";
import { BlogSectionAll } from "./BlogSectionAll";

export type BlogTagPageProps = {
  slug: string;
  data: GetAllGhostPosts;
};

export const BlogTagPage: PageComponent<BlogTagPageProps> = ({
  slug,
  data
}) => {
  return (
    <Container maxWidth="lg">
      <Title size="lg">Tag: {slug}</Title>
      <BlogSectionAll {...data} />
    </Container>
  );
};

BlogTagPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

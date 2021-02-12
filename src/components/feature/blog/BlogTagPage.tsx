import { Title } from "@htc/core/dist/src/components";
import { PageComponent } from "@htc/lib/page";
import { Container } from "@material-ui/core";
import { GetAllGhostPosts } from "lib/ghost/ghost.api";
import React from "react";

import { LayoutRoot } from "../layout";
import { BlogCardList } from "./BlogCardList";

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
      <BlogCardList {...data} />
    </Container>
  );
};

BlogTagPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

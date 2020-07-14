import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Tag } from "@tryghost/content-api";

import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  TagCardSection,
  Layout
} from "../components";
import { destructureNodes } from "../utils";

const TagsPage: FC = () => {
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(filter: { name: { glob: "!category-*" } }) {
        edges {
          node {
            slug
            name
            id
          }
        }
      }
    }
  `);
  const tags: Tag[] = destructureNodes(edges);

  return (
    <Layout pageTitle="Tags">
      <PageContainer>
        <LayoutContainer layoutType="stacked">
          <LayoutColumn>
            <PageHeader
              pageName="tags"
              pageTitle="tags"
              titleColor={{ scalable: { color: "primary" } }}
            />
          </LayoutColumn>
        </LayoutContainer>
        <LayoutContainer>
          <LayoutColumn>
            <TagCardSection tags={tags} tagType="tag" page="tags" />
          </LayoutColumn>
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default TagsPage;

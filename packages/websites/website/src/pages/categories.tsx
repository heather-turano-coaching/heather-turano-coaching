import { Tag } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import {
  PageContainer,
  PageHeader,
  TagCardSection
} from "../components/content";
import { Layout, LayoutColumn, LayoutContainer } from "../components/layout";
import { destructureNodes } from "../utils";

const CategoriesPage: FC = () => {
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(filter: { name: { glob: "category-*" } }) {
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
  const categories: Tag[] = destructureNodes(edges);

  return (
    <Layout pageTitle="Categories">
      <PageContainer>
        <LayoutContainer layoutType="stacked">
          <LayoutColumn>
            <PageHeader
              pageName="categories"
              pageTitle="categories"
              titleColor={{ scalable: { color: "secondary" } }}
            />
          </LayoutColumn>
        </LayoutContainer>
        <LayoutContainer>
          <LayoutColumn>
            <TagCardSection
              tags={categories.map(({ name, ...restCategory }) => ({
                name: name && name.split("-")[1],
                ...restCategory
              }))}
              tagType="category"
              page="categories"
            />
          </LayoutColumn>
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default CategoriesPage;

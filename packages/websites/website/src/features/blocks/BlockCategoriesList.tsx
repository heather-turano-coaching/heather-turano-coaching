import { Tag, TagGroup } from "@heather-turano-coaching/components";
import { Tag as TagType } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { FrameworkLink } from "../../components/content";
import {
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle
} from "../../components/layout";
import { destructureNodes } from "../../utils";

interface BlockCategoriesListProps {
  categories?: TagType[];
  title?: string;
}

export const BlockCategoriesList: FC<BlockCategoriesListProps> = ({
  title = "Cateogories",
  categories
}) => {
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(filter: { name: { glob: "category-*" } }) {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);

  const cats = categories || destructureNodes(edges);

  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title} />
      <LayoutBlockContent>
        <TagGroup>
          {cats.map((category: TagType) => (
            <FrameworkLink
              key={category.id}
              to={`/categories/${category.slug}`}
            >
              <Tag tagType="category" text={category.name as string} />
            </FrameworkLink>
          ))}
        </TagGroup>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

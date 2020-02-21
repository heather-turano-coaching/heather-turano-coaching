import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Tag as TagType } from "@tryghost/content-api";

import {
  Tag,
  TagGroup,
  ButtonAction
} from "@heather-turano-coaching/components";

import { FrameworkLink } from "../../components/general";
import {
  LayoutBlockTitle,
  LayoutBlock,
  LayoutBlockContent
} from "../../components/layout";
import { destructureNodes } from "../../utils";

interface BlockTagsListProps {
  title?: string;
  limit?: number;
}

export const BlockTagsList: FC<BlockTagsListProps> = ({
  title = "all tags",
  limit
}) => {
  /**
   * @todo use a dynamic limit
   */
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(filter: { name: { glob: "!category-*" } }) {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);

  const tags = destructureNodes(edges);

  const ts = limit
    ? tags.filter((_tag: any, index: number) => index < limit)
    : tags;

  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title}>
        <FrameworkLink to="/tags">
          <ButtonAction
            buttonSize="md"
            buttonColor={{ scalable: { color: "secondary", scale: 1 } }}
            icon="tags"
            iconWeight="fad"
            title="View all tags"
          />
        </FrameworkLink>
      </LayoutBlockTitle>
      <LayoutBlockContent>
        <TagGroup>
          {ts.map((tag: TagType) => (
            <FrameworkLink key={tag.slug} to={`/tags/${tag.slug}`}>
              <Tag tagType="tag" text={tag.name as string} />
            </FrameworkLink>
          ))}
        </TagGroup>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

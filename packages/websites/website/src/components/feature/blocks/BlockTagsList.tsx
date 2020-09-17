import {
  ButtonAction,
  Tag,
  TagGroup
} from "@heather-turano-coaching/components";
import { Tag as TagType } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { destructureNodes } from "../../../utils";
import { FrameworkLink } from "../../content";
import {
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle
} from "../../layout";

interface BlockTagsListProps {
  title?: string;
  limit?: number;
  tags?: TagType[];
}

export const BlockTagsList: FC<BlockTagsListProps> = ({
  title = "all tags",
  limit,
  tags
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

  const tgs = tags || destructureNodes(edges);

  const ts = limit
    ? tgs.filter((_tag: unknown, index: number) => index < limit)
    : tgs;

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

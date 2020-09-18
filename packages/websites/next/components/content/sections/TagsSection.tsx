import React, { FC } from "react";
import { Tag as GhostTag } from "@tryghost/content-api";
import {
  Tag,
  TagGroup,
  TagGroupProps
} from "@heather-turano-coaching/components";
import { FrameworkLink } from "../general";

interface TagSectionProps {
  tags?: GhostTag[];
  filter?: "tags" | "categories";
  alignment?: TagGroupProps["alignment"];
}

const normalizeTagName = (
  filter: TagSectionProps["filter"],
  tagName: string
): string => {
  if (filter === "categories") {
    return tagName.split("-")[1];
  }
  return tagName;
};

export const TagsSection: FC<TagSectionProps> = ({
  tags = [],
  filter = "tags",
  ...restProps
}) => (
  <>
    {tags.length > 0 && (
      <TagGroup {...restProps}>
        {tags
          .filter((tag) => {
            if (filter === "categories") {
              return tag.name?.includes("category-");
            }
            return !tag.name?.includes("category-");
          })
          .map((tag) => (
            <FrameworkLink key={tag.id} to={`/${filter}/${tag.slug}`}>
              <Tag
                tagType={filter === "categories" ? "category" : "tag"}
                key={tag.id}
                text={normalizeTagName(filter, tag.name as string)}
              />
            </FrameworkLink>
          ))}
      </TagGroup>
    )}
  </>
);

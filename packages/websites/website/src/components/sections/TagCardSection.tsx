import React, { FC } from "react";
import { Tag } from "@tryghost/content-api";
import { TagGroup, TagCard } from "@heather-turano-coaching/components";
import { FrameworkLink } from "..";
import styled from "styled-components";
import { universalHover } from "../../styles";

interface TagCardSectionProps {
  tags: Tag[];
  tagType: "tag" | "category";
  page: "categories" | "tags";
}

const StyledTagCardSection = styled.div`
  a {
    & > div {
      ${universalHover};
    }
  }
`;

export const TagCardSection: FC<TagCardSectionProps> = ({
  tags,
  tagType,
  page
}) => (
  <StyledTagCardSection>
    <TagGroup>
      {tags.map(tag => (
        <FrameworkLink key={tag.id} to={`/${page}/${tag.slug}`}>
          <TagCard type={tagType} name={tag.name as string} />
        </FrameworkLink>
      ))}
    </TagGroup>
  </StyledTagCardSection>
);

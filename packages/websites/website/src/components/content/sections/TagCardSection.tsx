import { TagCard, TagGroup } from "@heather-turano-coaching/core/components";
import { Tag } from "@tryghost/content-api";
import React, { FC } from "react";
import styled from "styled-components";

import { universalHover } from "../../../components/styles";
import { FrameworkLink } from "..";

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
      {tags.map((tag) => (
        <FrameworkLink key={tag.id} to={`/${page}/${tag.slug}`}>
          <TagCard type={tagType} name={tag.name as string} />
        </FrameworkLink>
      ))}
    </TagGroup>
  </StyledTagCardSection>
);

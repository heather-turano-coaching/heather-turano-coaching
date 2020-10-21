import { TagCard, TagGroup } from "@heather-turano-coaching/core/components";
import { Tag } from "@tryghost/content-api";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

import { universalHover } from "../../../components/styles";

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
        <Link key={tag.id} href={`/${page}/${tag.slug}`}>
          <a>
            <TagCard type={tagType} name={tag.name as string} />
          </a>
        </Link>
      ))}
    </TagGroup>
  </StyledTagCardSection>
);

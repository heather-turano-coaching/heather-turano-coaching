import {
  makeInset,
  makeOutset,
  makeReset,
  makeSpace,
} from "@heather-turano-coaching/design-system";
import { Position } from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { StyledTag, Tag, TagProps } from "./Tag";

export interface TagGroupProps {
  tags?: TagProps[];
  alignment?: Omit<Position, "center">;
}

const StyledTagGroup = styled.ul<Required<Pick<TagGroupProps, "alignment">>>`
  ${makeReset("list")}
  ${makeOutset({ top: -16 })};
  /* ${makeInset({ vertical: 16 })}; */

  ${({ alignment }) => {
    if (alignment === "left") {
      return css`
        text-align: left;
      `;
    }
    return css`
      text-align: right;
    `;
  }}

  & > li,
  & > ${StyledTag}, & > a {
    display: inline-block;

    ${({ alignment }) => {
      if (alignment === "left") {
        return css`
          &:not(:last-child) {
            margin-right: ${makeSpace(16)};
          }
        `;
      }
      return css`
        &:not(:first-child) {
          margin-left: ${makeSpace(16)};
        }
      `;
    }}

    & > * {
      ${makeOutset({ top: 16 })};
    }
  }
`;

export const TagGroup: FC<TagGroupProps> = ({
  tags = [],
  alignment = "left",
  children,
}) => (
  <>
    {tags && tags.length !== 0 && (
      <StyledTagGroup alignment={alignment}>
        {tags.map((props, index) => (
          <li key={index.toString()}>
            <Tag {...props} />
          </li>
        ))}
      </StyledTagGroup>
    )}
    {children && (
      <StyledTagGroup as="div" alignment={alignment}>
        {children}
      </StyledTagGroup>
    )}
  </>
);

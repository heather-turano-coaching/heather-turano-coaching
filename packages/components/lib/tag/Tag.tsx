import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import {
  makeColor,
  makeInset,
  makeResponsive,
  makeSize,
  makeSpace
} from "../design-system";
import { Typography } from "../typography2";

export type TagType = "category" | "tag" | "list";

export interface TagProps {
  text: string;
  tagType?: TagType;
}

const CSSTag: { [key in TagType]: SimpleInterpolation } = {
  category: css`
    ${makeInset({ horizontal: 12 })};
    transition: background 0.15s ease-in-out;
    background: ${makeColor({
      scalable: { color: "secondary", scale: 3 }
    })};

    ${makeResponsive({
      beginAt: "laptop",
      style: `
        &:hover {
          background: ${makeColor({
            scalable: { color: "secondary", scale: 2 }
          })};
        }
      `
    })}
  `,
  tag: css`
    ${makeInset({ horizontal: 12 })};
    transition: background 0.15s ease-in-out;
    background: ${makeColor({
      scalable: { color: "primary", scale: 3 }
    })};

    ${makeResponsive({
      beginAt: "laptop",
      style: `
        &:hover {
          background: ${makeColor({
            scalable: { color: "primary", scale: 2 }
          })};
        }
      `
    })}
  `,
  list: css`
    ${makeInset({ horizontal: 16 })};
    background: ${makeColor({ fixed: "bright-green" })};
    border: ${makeSize({ custom: 1 })} solid
      ${makeColor({
        scalable: { color: "secondary" }
      })};
  `
};

export const StyledTag = styled.div<Required<Pick<TagProps, "tagType">>>`
  display: inline-block;
  border-radius: ${makeSpace({ custom: 2 })};
  text-transform: uppercase;

  ${({ tagType }) => CSSTag[tagType]};
`;

export const Tag: FC<TagProps> = ({ tagType = "tag", text }) => (
  <StyledTag tagType={tagType}>
    <Typography variant="body2">{text}</Typography>
  </StyledTag>
);

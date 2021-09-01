import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import { makeColor, makeInset, makeRhythm, makeSize } from "../design-system";
import { Heading, Typography } from "../display";

export type TagTypes = "tag" | "category";

interface TagCardProps {
  type: TagTypes;
  name: string;
  description?: string;
}

const CSSTagCardMap: { [key in TagTypes]: SimpleInterpolation } = {
  category: css`
    border: ${makeSize({ custom: 1 })} solid
      ${makeColor({ scalable: { color: "secondary" } })};
    background: ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
  `,
  tag: css`
    border: ${makeSize({ custom: 1 })} solid
      ${makeColor({ scalable: { color: "primary" } })};
    background: ${makeColor({ scalable: { color: "primary", scale: 3 } })};
  `
};

const StyledTagCard = styled.div<Pick<TagCardProps, "type">>`
  ${makeInset({ horizontal: 36, vertical: 24 })};
  ${({ type }) => CSSTagCardMap[type]};
  display: inline-block;
  border-radius: ${makeSize({ custom: 4 })};

  p {
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};
  }
`;

/**
 * HIGHLY EXPERIMENTAL - Don't act like this wont break in
 * production and be uggggggly as butt. Suggestion... don't
 * add descriptions to these cards until this becomes stead... yo.
 *
 * das reference: https://caniuse.com/#feat=css-line-clamp
 */
const StyledContent = styled.div<{ hasDescription: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ hasDescription }) =>
    hasDescription &&
    css`
      width: ${makeSize({ custom: 280 })};
    `};
`;

export const TagCard: FC<TagCardProps> = ({ type, name, description }) => (
  <StyledTagCard type={type}>
    <Heading fontSize="h4">{name}</Heading>
    {description && (
      <StyledContent hasDescription={typeof description !== "undefined"}>
        <Typography variant="paragraph" fontSize="sm">
          {description}
        </Typography>
      </StyledContent>
    )}
  </StyledTagCard>
);

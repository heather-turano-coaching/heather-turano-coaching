import {
  makeResponsive,
  makeSize
} from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import { BlogType } from "./blog.types";

type BlogCardImageProps = { blogType: BlogType };

const CSSBlogCardImageMap: {
  [key in BlogCardImageProps["blogType"]]: SimpleInterpolation;
} = {
  featured: css`
    height: ${makeSize({ custom: 180 })};
    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        min-width: ${makeSize({ custom: 660 })};
        width: ${makeSize({ custom: 660 })};
        max-width: ${makeSize({ custom: 660 })};
      `
    })}
  `,
  regular: css`
    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        min-width: ${makeSize({ custom: 264 })};
        width: ${makeSize({ custom: 264 })};
        max-width: ${makeSize({ custom: 264 })};
      `
    })}
  `
};

const StyledBlogCardImage = styled.div<BlogCardImageProps>`
  ${({ blogType }) => CSSBlogCardImageMap[blogType]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      align-self: stretch;

    `
  })}
`;

export const BlogCardImage: FC<BlogCardImageProps> = ({
  blogType,
  children
}) => <StyledBlogCardImage blogType={blogType}>{children}</StyledBlogCardImage>;

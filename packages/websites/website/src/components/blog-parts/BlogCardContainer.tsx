import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import { BaseBlog, BlogType } from "./blog.types";

type BlogCardContainerProps = { blogType: BlogType };

const CSSBlogCardContainerMap: {
  [key in BaseBlog["blogType"]]: SimpleInterpolation;
} = {
  featured: css``,
  regular: css``
};

const StyledBlogCardContainer = styled.div<BlogCardContainerProps>`
  ${({ blogType }) => CSSBlogCardContainerMap[blogType]};
`;

export const BlogCardContainer: FC<BlogCardContainerProps> = ({
  blogType,
  children
}) => (
  <StyledBlogCardContainer blogType={blogType}>
    {children}
  </StyledBlogCardContainer>
);

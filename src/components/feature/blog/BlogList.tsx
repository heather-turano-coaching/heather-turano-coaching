import { GetAllGhostPosts } from "@htc/lib/ghost";
import { makeRem, makeTabletStyles } from "@htc/theme";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { BlogCard, blogCardSpacing } from "./BlogCard";

const StyledBlogList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;

  & > * {
    width: 100%;
  }

  ${({ theme }) => css`
    ${makeTabletStyles(theme)} {
      & > * {
        width: ${`calc(50% - ${makeRem(blogCardSpacing * 2)})`};
      }
    }
  `}
`;

export const BlogList: FC<GetAllGhostPosts> = (posts) => {
  return (
    <StyledBlogList>
      {posts.posts.map((post) => (
        <BlogCard {...post} key={post.id} />
      ))}
    </StyledBlogList>
  );
};

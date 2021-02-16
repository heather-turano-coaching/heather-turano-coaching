import { GetAllGhostPosts } from "@htc/lib/ghost";
import { makeRem, makeTabletStyles } from "@htc/theme";
import { PostOrPage } from "@tryghost/content-api";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { BlogListCard, blogCardSpacing } from "./BlogListCard";

const SyledBlogList = styled.div`
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

export const BlogList: FC<{ posts: PostOrPage[] }> = ({ posts }) => {
  return (
    <SyledBlogList>
      {posts.map((post) => (
        <BlogListCard {...post} key={post.id} />
      ))}
    </SyledBlogList>
  );
};

import { makeRem, makeTabletStyles } from "@htc/theme";
import { PostOrPage } from "@tryghost/content-api";
import React, { forwardRef } from "react";
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

type BlogListProps = {
  posts: PostOrPage[];
  loading?: boolean;
};

export const BlogList = forwardRef<HTMLDivElement, BlogListProps>(
  function BlogList({ posts }, ref) {
    return (
      <>
        <SyledBlogList ref={ref}>
          {posts.map((post, index) => (
            <BlogListCard {...post} key={post.id} index={index} />
          ))}
        </SyledBlogList>
      </>
    );
  }
);

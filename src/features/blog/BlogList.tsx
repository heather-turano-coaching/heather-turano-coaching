import { makeRem, makeTabletStyles } from "@htc/theme";
import { PostOrPage } from "@tryghost/content-api";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { BlogListCard } from "./BlogListCard";

const SyledBlogList = styled.div`
  box-sizing: border-box;

  & > * {
    width: 100%;
  }

  ${({ theme }) => css`
    & > * {
      margin-bottom: ${makeRem(80)};
    }

    ${makeTabletStyles(theme)} {
      & > * {
        width: 54%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${makeRem(80)};
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

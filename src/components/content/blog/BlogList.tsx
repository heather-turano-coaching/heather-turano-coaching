import { makeDesktopStyles, makeRem, makeTabletStyles } from "@htc/theme";
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
      display: flex;
      flex-wrap: wrap;
      & > * {
        width: ${`calc(50% - ${makeRem(2 * 2 * 8)})`};
        margin-left: ${makeRem(16)};
        margin-right: ${makeRem(16)};
        margin-bottom: ${makeRem(80)};
      }
    }

    ${makeDesktopStyles(theme)} {
      display: flex;
      justify-content: center;
      & > * {
        width: ${`calc(33.3% - ${makeRem(3 * 2 * 8)})`};
        margin-left: ${makeRem(16)};
        margin-right: ${makeRem(16)};
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

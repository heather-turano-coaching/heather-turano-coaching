import {
  theme.breakpoints.laptop,
  theme.size.makeRem,
  makeTabletStyles
} from "@htc-website/components";
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
      margin-bottom: ${theme.size.makeRem(80)};
    }

    ${theme.breakpoints.tablet} {
      display: flex;
      flex-wrap: wrap;
      & > * {
        width: ${`calc(50% - ${theme.size.makeRem(2 * 2 * 8)})`};
        margin-left: ${theme.size.makeRem(16)};
        margin-right: ${theme.size.makeRem(16)};
        margin-bottom: ${theme.size.makeRem(80)};
      }
    }

    ${theme.breakpoints.laptop} {
      display: flex;
      justify-content: center;
      & > * {
        width: ${`calc(33.3% - ${theme.size.makeRem(3 * 2 * 8)})`};
        margin-left: ${theme.size.makeRem(16)};
        margin-right: ${theme.size.makeRem(16)};
        margin-bottom: ${theme.size.makeRem(80)};
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

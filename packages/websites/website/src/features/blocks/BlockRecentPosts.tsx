import { Button } from "@heather-turano-coaching/components";
import {
  makeColor,
  makeSize,
  makeSpace,
} from "@heather-turano-coaching/design-system";
import {
  useProgressiveLoader,
  useSticky,
} from "@heather-turano-coaching/hooks";
import { PostOrPage } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useRef } from "react";
import styled, { css } from "styled-components";

import {
  BlogPostList,
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle,
  LoadMorePostsButton,
  headerNavVerticalPadding,
} from "../../components";
import { destructureNodes } from "../../utils";

interface BlockRecentPostsProps {
  title?: string;
}

const StyledStickyWrapper = styled.div<{ wrapperHeight?: number }>`
  position: relative;
  z-index: 20000000;

  ${({ wrapperHeight }) =>
    wrapperHeight &&
    css`
      height: ${makeSize({ custom: wrapperHeight })};
    `}
`;

const StyledStickyTarget = styled.div<{ isSticky: boolean }>`
  transition: top 0.1s linear;
  background: transparent;
  width: 100%;
  transition: all 0.2s ease-in-out;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: ${makeSpace({ custom: headerNavVerticalPadding })};
      background: ${makeColor({ fixed: "light" })};
    `};
`;

export const BlockRecentPosts: FC<BlockRecentPostsProps> = ({
  title = "recent posts",
}) => {
  const {
    allGhostPost: { edges },
  } = useStaticQuery(graphql`
    {
      allGhostPost {
        edges {
          node {
            ...GhostPostFields
          }
        }
      }
    }
  `);

  const posts = destructureNodes(edges);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky<HTMLDivElement>({
    ref: wrapperRef,
    offset: headerNavVerticalPadding,
  });

  const [postList, loadMorePosts, morePostsExist] = useProgressiveLoader<
    PostOrPage
  >({ list: posts });

  return (
    <LayoutBlock>
      <StyledStickyWrapper
        ref={wrapperRef}
        wrapperHeight={targetRef.current?.offsetHeight}
      >
        <StyledStickyTarget
          isSticky={isSticky}
          ref={targetRef}
          style={{ width: wrapperRef.current?.offsetWidth }}
        >
          <LayoutBlockTitle title={title} />
        </StyledStickyTarget>
      </StyledStickyWrapper>
      <LayoutBlockContent>
        <BlogPostList posts={postList} />
        {morePostsExist && (
          <LoadMorePostsButton loadMorePosts={loadMorePosts} />
        )}
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

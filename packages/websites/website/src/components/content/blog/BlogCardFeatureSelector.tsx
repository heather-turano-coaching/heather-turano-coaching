import { Typography, makeFlex } from "@heather-turano-coaching/core/components";
import {
  makeColor,
  makeFont,
  makeInset,
  makeOutset,
  makeReset,
  makeResponsive,
  makeSize,
  makeSpace
} from "@heather-turano-coaching/core/design-system";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { PostOrPage } from "@tryghost/content-api";
import React, { FC } from "react";
import styled, { css } from "styled-components";

interface BlogCardFeatureSelectorProps {
  currentlySelectedPost: PostOrPage | undefined;
  posts: PostOrPage[];
  setFp: (featuredPost: PostOrPage) => void;
}

const StyledFeatureBlogSelector = styled.div`
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "distribute-evently", "center")};
      background: ${makeColor({ fixed: "light" })};
      ${makeOutset({ bottom: 32 })};
    `
  })};
`;

const StyledFeaturePostButton = styled.button.attrs({ type: "button" })<{
  isActive: boolean;
}>`
  ${makeReset("button")};
  width: 100%;
  align-self: stretch;
  ${makeInset({ vertical: 20, horizontal: 16 })};
  position: relative;
  text-align: center;

  &:not(:first-child) {
    &::after {
      content: "";
      position: absolute;
      left: -1px;
      top: ${makeSpace({ custom: 16 })};
      bottom: ${makeSpace({ custom: 16 })};
      background: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
      width: ${makeSize({ custom: 1 })};
    }
  }

  &:hover {
    ${({ isActive }) =>
      !isActive &&
      css`
        & > p {
          color: ${makeColor({ scalable: { color: "secondary", scale: 1 } })};
          transition: color 0.15s ease-in-out;
        }
      `}
  }

  p {
    ${({ isActive }) => css`
      ${makeFont({
        fontSize: "xs",
        fontFamily: "Montserrat",
        fontWeight: isActive ? "medium" : "regular"
      })}
    `}
  }
`;

export const BlogCardFeatureSelector: FC<BlogCardFeatureSelectorProps> = ({
  currentlySelectedPost,
  posts,
  setFp
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  return !isWindowMobile ? (
    <StyledFeatureBlogSelector>
      {posts.map((post) => (
        <StyledFeaturePostButton
          key={post.id}
          onClick={() => setFp(post)}
          isActive={
            currentlySelectedPost ? post.id === currentlySelectedPost.id : false
          }
        >
          <Typography
            variant="label"
            fontSize="xs"
            fontColor={
              currentlySelectedPost && post.id === currentlySelectedPost.id
                ? { scalable: { color: "secondary" } }
                : { scalable: { color: "gray", scale: 2 } }
            }
          >
            {post.title}
          </Typography>
        </StyledFeaturePostButton>
      ))}
    </StyledFeatureBlogSelector>
  ) : null;
};

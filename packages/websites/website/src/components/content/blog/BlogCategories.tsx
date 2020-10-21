import { Typography } from "@heather-turano-coaching/core/components";
import {
  makeColor,
  makeInset,
  makeOutset,
  makeReset,
  makeSize,
  makeSpace
} from "@heather-turano-coaching/core/design-system";
import { rgba } from "polished";
import React, { FC } from "react";
import styled from "styled-components";

export interface BlogCategory {
  rawLabel: string;
  label: string;
  route: string;
  img: string;
}

interface BlogCategoriesProps {
  categories: BlogCategory[];
}

const StyledBlogContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  text-align: center;
  ${makeOutset({ bottom: 48 })};

  & * {
    box-sizing: border-box;
  }

  &::after,
  &::before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${makeSize({ custom: 48 })};
    z-index: 100;
    background-image: linear-gradient(
      90deg,
      #ffffff 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: rotate(180deg);
  }
`;

const StyledBlogCategories = styled.ul`
  ${makeReset("list")};
  ${makeInset({ vertical: 32 })};
  white-space: nowrap;
  overflow-x: auto;
`;

const StyledBlogCategory = styled.li`
  position: relative;
  display: inline-block;
  ${makeOutset({ horizontal: 4 })};
  border-radius: ${makeSize({ custom: 2 })};
  min-width: ${makeSize({ custom: 160 })};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &:first-child {
    margin-left: ${makeSpace(48)};
  }
  &:last-child {
    margin-right: ${makeSpace(48)};
  }

  a {
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    ${makeInset({ vertical: 24, horizontal: 24 })};
    border-radius: ${makeSize({ custom: 4 })};
  }

  p {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const StyledBackground = styled.div<{ img: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: ${makeSize({ custom: 2 })};
  overflow: hidden;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &::before {
    background: ${rgba(makeColor({ custom: "#1C1C1C" }), 0.4)};
    z-index: 1;
  }
  &::after {
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
  }
`;

export const BlogCategories: FC<BlogCategoriesProps> = ({ categories }) => (
  <StyledBlogContainer>
    <StyledBlogCategories>
      {categories.map(({ label, img }) => (
        <StyledBlogCategory key={img}>
          <Typography
            variant="paragraph"
            fontSize="md"
            fontColor={{ fixed: "light" }}
          >
            {label}
          </Typography>
          <StyledBackground img={img} />
        </StyledBlogCategory>
      ))}
    </StyledBlogCategories>
  </StyledBlogContainer>
);

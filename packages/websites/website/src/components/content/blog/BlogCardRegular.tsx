/* eslint-disable @typescript-eslint/camelcase */
import {
  Heading,
  Typography,
  makeFlex,
  universalShadow
} from "@heather-turano-coaching/core/components";
import {
  makeColor,
  makeInset,
  makeOutset,
  makeResponsive,
  makeRhythm,
  makeSize
} from "@heather-turano-coaching/core/design-system";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { PostOrPage } from "@tryghost/content-api";
import React, { FC } from "react";
import styled from "styled-components";

import { formatLongDate } from "../../../utils";
import { FrameworkLink } from "../general";
import { BlogCardAvatar, TagsSection } from "..";

interface BlogPost {
  post: PostOrPage;
  blogType: "featured" | "regular";
}

const StyledRegularBlogCardContainer = styled.div`
  ${makeOutset({ bottom: 52 })};

  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      border-radius: ${makeSize({ custom: 2 })};
      overflow: hidden;
      box-shadow: ${universalShadow};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
      ${makeFlex("row", "flex-start", "stretch")};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.01);
        box-shadow: 0 2px 15px 0px ${makeColor({
          scalable: { color: "gray" }
        })};
      }
    `
  })};
`;

const StyledBlogImage = styled.div`
  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `width: 100%;`
  })};

  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      width: 100%;
      height: ${makeSize({ custom: 200 })};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `width: 40%;`
  })};

  & > * {
    ${makeResponsive({
      endAt: "tabletPortrait",
      style: `width: 100%;`
    })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        height: 100%;
        width: 100%;
      `
    })}

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;

      ${makeResponsive({
        beginAt: "tabletPortrait",
        style: `
          img {
            width: 100%;
            height: 100%;
          }
        `
      })};
    }
  }
`;

const StyledCardContent = styled.div`
  position: relative;
  ${makeInset({ horizontal: 24, vertical: 32 })};
  background: ${makeColor({ fixed: "light" })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeInset({ horizontal: 36, vertical: 32 })};
    `
  })}

  h2,
  h3,
  h4 {
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })};
    line-height: 1.2;

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })};
      `
    })}
  }

  & > * > p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 2 })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })};
      `
    })}
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      flex: 1;
    `
  })}
`;

export const BlogPost: FC<BlogPost> = ({
  post: { feature_image, slug, authors, published_at, title, excerpt, tags }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const authorName = authors ? (authors[0].name as string) : "";
  const avatarImg = authors ? (authors[0].profile_image as string) : "";
  const datePublished = formatLongDate(published_at as string);
  const pTitle = title as string;
  const pExcerpt = excerpt as string;
  const Tags = (
    <TagsSection
      tags={tags}
      filter="categories"
      alignment={isWindowMobile ? "left" : "right"}
    />
  );

  return (
    <StyledRegularBlogCardContainer>
      <StyledBlogImage>
        <FrameworkLink to={`/blog/${slug}`}>
          <img src={feature_image as string} alt={slug} />
        </FrameworkLink>
      </StyledBlogImage>
      <StyledCardContent>
        {!isWindowMobile && Tags}
        <FrameworkLink to={`/blog/${slug}`}>
          <Heading
            fontSize={isWindowMobile ? "h3" : "h2"}
            fontColor={{ fixed: "dark" }}
          >
            {pTitle}
          </Heading>
          <BlogCardAvatar
            authorName={authorName}
            avatarImg={avatarImg}
            datePublished={datePublished}
            layoutType="inline"
          />
          <Typography
            variant="paragraph"
            fontSize={isWindowMobile ? { custom: 14 } : "sm"}
            fontColor={{ scalable: { color: "gray", scale: 0 } }}
          >
            {pExcerpt}
          </Typography>
        </FrameworkLink>
        {isWindowMobile && Tags}
      </StyledCardContent>
    </StyledRegularBlogCardContainer>
  );
};

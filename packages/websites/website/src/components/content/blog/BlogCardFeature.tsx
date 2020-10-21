import {
  Avatar,
  Button,
  Heading,
  Typography,
  makeFlex,
  universalShadow
} from "@heather-turano-coaching/core/components";
import {
  makeColor,
  makeInset,
  makeResponsive,
  makeRhythm,
  makeSize
} from "@heather-turano-coaching/core/design-system";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { Link } from "@reach/router";
import { PostOrPage } from "@tryghost/content-api";
import React, { FC } from "react";
import styled from "styled-components";

import { formatLongDate } from "../../../utils";
import { FrameworkLink } from "../general";
import { TagsSection } from "../sections";
import { BlogCardAvatar } from "./BlogCardAvatar";

interface BlogCardFeatureProps {
  featuredPost: PostOrPage;
}

export const StyledFeaturedBlogCardContainer = styled.div`
  overflow: hidden;
  border-radius: ${makeSize({ custom: 8 })};
  height: 100%;

  a {
    text-decoration: none;
  }

  & + * {
    border-radius: ${makeSize({ custom: 8 })};
  }

  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      border-radius: ${makeSize({ custom: 8 })};
      box-shadow: ${universalShadow};
      background: ${makeColor({ fixed: "light" })};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
      width: ${makeSize({ custom: 500 })};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      width: 100%;
      ${makeFlex("row", "flex-start", "stretch")};
      height: ${makeSize({ custom: 520 })};
      border-radius: 0;
    `
  })};
`;

const StyledBlogFeaturedImage = styled.div`
  img {
    width: 100%;
    height: ${makeSize({ custom: 140 })};
    object-fit: cover;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      height: ${makeSize({ custom: 240 })};

      img {
        height: 100%;
      }
    `
  })}

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      height: initial;
      align-self: stretch;
      
      img {
          height: 100%;
          max-height: 100%;
          width: ${makeSize({ custom: 380 })};
        }
      `
  })};
`;

const StyledCardContent = styled.div`
  position: relative;
  ${makeInset({ horizontal: 24, top: 32 })};
  background: ${makeColor({ fixed: "light" })};
  height: ${makeSize({ custom: 384 })};

  h2,
  h3,
  h4 {
    line-height: 1.3;
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
      ${makeRhythm({ fontSize: "xs", top: 1, bottom: 1 })};
    `
    })}
  }
  & > p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 1 })};
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      height: ${makeSize({ custom: 412 })};
      ${makeInset({ horizontal: 32, top: 32 })};
    `
  })}

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({ horizontal: 32, vertical: 32 })};
      background: ${makeColor({ scalable: { color: "secondary" } })};
      box-sizing: border-box;
      height: 100%;
    `
  })};
`;

const StyledAvatarContainer = styled.div`
  ${makeResponsive({
    endAt: "laptop",
    style: `
      position: absolute;
      left: ${makeSize("sm")};
      top: ${`calc(${makeSize({ custom: 42 })} / -1)`};
    `
  })}
`;

export const BlogCardFeature: FC<BlogCardFeatureProps> = ({
  featuredPost: fp
}) => {
  const [
    windowWidth,
    { tabletPortrait, tabletLandscape, laptop }
  ] = useBreakpoints();

  const authorName = fp.authors ? (fp.authors[0].name as string) : "";
  const avatarImg = fp.authors ? (fp.authors[0].profile_image as string) : "";
  const datePublished = formatLongDate(fp.published_at as string);
  const title = fp.title as string;
  const excerpt = fp.excerpt as string;

  const Content = (
    <>
      <StyledBlogFeaturedImage>
        <img src={fp.feature_image as string} alt={fp.slug} />
      </StyledBlogFeaturedImage>
      <StyledCardContent>
        {windowWidth < laptop && (
          <StyledAvatarContainer>
            <Avatar image={avatarImg} alt={authorName} size="xxl" />
          </StyledAvatarContainer>
        )}
        {!(windowWidth < laptop) && (
          <TagsSection
            tags={fp.tags}
            alignment={windowWidth < tabletLandscape ? "left" : "right"}
            filter="categories"
          />
        )}
        <Heading
          fontSize={windowWidth < tabletPortrait ? "h3" : "h2"}
          fontColor={{
            fixed: windowWidth >= tabletLandscape ? "light" : "dark"
          }}
        >
          {title}
        </Heading>
        {windowWidth >= tabletLandscape && (
          <BlogCardAvatar
            authorName={authorName}
            avatarImg={avatarImg}
            datePublished={datePublished}
            layoutType="inline"
            themeType={windowWidth >= tabletLandscape ? "light" : "dark"}
          />
        )}
        <Typography
          variant="paragraph"
          fontSize={windowWidth < tabletPortrait ? { custom: 14 } : "sm"}
          fontColor={
            windowWidth >= tabletLandscape
              ? { fixed: "light" }
              : { scalable: { color: "gray", scale: 0 } }
          }
        >
          {excerpt}
        </Typography>

        {windowWidth >= tabletLandscape && (
          <FrameworkLink to={`/${fp.slug}`}>
            <Button styleType="primary" label="Read more" />
          </FrameworkLink>
        )}
      </StyledCardContent>
    </>
  );

  return windowWidth < laptop ? (
    <StyledFeaturedBlogCardContainer>
      <Link to={fp.slug as string}>{Content}</Link>
    </StyledFeaturedBlogCardContainer>
  ) : (
    <StyledFeaturedBlogCardContainer>{Content}</StyledFeaturedBlogCardContainer>
  );
};

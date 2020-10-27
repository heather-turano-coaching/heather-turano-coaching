import ClockIcon from "@heather-turano-coaching/core/icons/clock.svg";
import HeartIcon from "@heather-turano-coaching/core/icons/heart.svg";
import MessageSquareIcon from "@heather-turano-coaching/core/icons/message-square.svg";
import Share2Icon from "@heather-turano-coaching/core/icons/share-2.svg";
import { makeRem, makeTabletStyles } from "@heather-turano-coaching/core/theme";
import { SvgIcon, Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import { formatShortDate } from "lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import styled, { css } from "styled-components";

export const blogCardSpacing = 24;
const blogCardSidePadding = 24;

const StyledIcon = styled(SvgIcon)`
  &:not(:first-child) {
    margin-left: ${makeRem(24)};
  }
`;

const StyledIconText = styled(Typography)`
  && {
    margin-left: ${makeRem(8)};
  }
`;

export const BlogCard: FC<PostOrPage> = (post) => {
  return (
    <div
      css={css`
        margin: ${makeRem(blogCardSpacing)} ${makeRem(16)};
        box-shadow: 0 0 10px 3px rgba(207, 207, 207, 0.5);
        border-radius: ${makeRem(4)};
        overflow: hidden;
        display: flex;
        flex-direction: column;

        ${({ theme }) => css`
          ${makeTabletStyles(theme)} {
            margin: ${makeRem(blogCardSpacing)};
          }
        `}
      `}
    >
      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <a
          css={css`
            width: 100%;
          `}
        >
          <img
            src={post.feature_image}
            alt={post.slug}
            css={css`
              width: 100%;
              height: ${makeRem(300)};
              display: block;
              background-color: ${({ theme }) => theme.palette.light.light};
              object-fit: cover;
              object-position: top left;
            `}
          />
        </a>
      </Link>
      <div
        css={css`
          padding: ${makeRem(blogCardSidePadding)};
          flex: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        <Typography variant="caption">
          {formatShortDate(post.published_at)}
        </Typography>
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
          <a>
            <Typography variant="h5">{post.title}</Typography>
          </a>
        </Link>
        <Typography
          variant="body2"
          color="textPrimary"
          css={css`
            margin-bottom: ${makeRem(28)} !important;
            flex: 1;
            font-size: ${makeRem(16)} !important;
          `}
        >
          {post.excerpt}
        </Typography>
      </div>
      <div
        css={css`
          border-top: 1px solid ${({ theme }) => theme.palette.light.main};
          height: ${makeRem(60)};
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 ${makeRem(blogCardSidePadding)};

          & > * {
            display: flex;
            align-items: center;
            line-height: ${makeRem(60)};
          }
        `}
      >
        <div>
          <StyledIcon fontSize="small" color="primary">
            <MessageSquareIcon />
          </StyledIcon>
          <StyledIconText variant="overline">0</StyledIconText>
          <StyledIcon fontSize="small" color="secondary">
            <HeartIcon />
          </StyledIcon>
          <StyledIconText variant="overline">0</StyledIconText>
          <StyledIcon fontSize="small" color="action">
            <ClockIcon />
          </StyledIcon>
          <StyledIconText variant="overline">
            {post.reading_time} min
          </StyledIconText>
        </div>
        <div>
          <StyledIcon fontSize="small">
            <Share2Icon />
          </StyledIcon>
        </div>
      </div>
    </div>
  );
};

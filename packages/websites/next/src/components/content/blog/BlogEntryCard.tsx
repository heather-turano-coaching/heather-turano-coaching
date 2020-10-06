import { makeRem, makeTabletStyles } from "@heather-turano-coaching/core/theme";
import { Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import { formatShortDate } from "lib/utils";
import React, { FC } from "react";
import { css } from "styled-components";

export const blogCardHorizontalSpacing = 24;

export const BlogEntryCard: FC<PostOrPage> = (post) => {
  return (
    <div
      css={css`
        margin: ${makeRem(48)} 0;
        box-shadow: 0 0 10px 3px rgba(207, 207, 207, 0.5);
        border-radius: ${makeRem(4)};
        overflow: hidden;
        display: flex;
        flex-direction: column;

        ${({ theme }) => css`
          ${makeTabletStyles(theme)} {
            margin: ${makeRem(48)} ${makeRem(24)};
          }
        `}
      `}
    >
      <img
        src={post.feature_image}
        alt={post.slug}
        css={css`
          height: ${makeRem(300)};
          display: block;
          background-color: ${({ theme }) => theme.palette.light.light};
          object-fit: cover;
          object-position: top left;
        `}
      />
      <div
        css={css`
          padding: ${makeRem(16)};
          flex: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        <Typography variant="caption">
          {formatShortDate(post.published_at)}
        </Typography>
        <Typography variant="h5">{post.title}</Typography>
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
          border-top: 1px solid ${({ theme }) => theme.palette.light.light};
          height: ${makeRem(60)};
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div>test1</div>
        &nbsp; &nbsp; &nbsp;
        <div>test2</div>
      </div>
    </div>
  );
};

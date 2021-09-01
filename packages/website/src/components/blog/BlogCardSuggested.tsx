import { formatShortDate } from "@htc-website/utils";
import { Typography, makeFontWeight } from "@htc/components";
import { PostOrPage } from "@tryghost/content-api";
import React, { FC } from "react";
import { css } from "styled-components";

import { BlogCardShadow } from "./blog.card";

export const BlogCardSuggested: FC<PostOrPage> = (props) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-start;

        transform: scale(1);
        ${BlogCardShadow};
        transition: all 0.15s ease-in-out;

        ${({ theme }) => css`
          min-height: ${theme.size.makeRem(180)};
          max-width: ${theme.size.makeRem(300)};
          border-radius: ${theme.size.makeRem(4)};
          margin-top: ${theme.size.makeRem(24)};

          ${theme.breakpoints.laptop} {
            flex-direction: column;
            margin-left: ${theme.size.makeRem(12)};
            margin-right: ${theme.size.makeRem(12)};
            height: ${theme.size.makeRem(340)};
            min-width: ${theme.size.makeRem(300)};

            &:hover {
              transform: scale(1.05);
            }
          }
        `}
      `}
    >
      <img
        src={props.feature_image as string}
        alt={props.title}
        css={css`
          object-fit: cover;

          ${({ theme }) => css`
            ${theme.breakpoints.mobileOnly} {
              border-top-left-radius: inherit;
              border-bottom-left-radius: inherit;
              max-width: ${theme.size.makeRem(120)};
              height: auto;
            }

            ${theme.breakpoints.laptop} {
              border-top-left-radius: inherit;
              border-top-right-radius: inherit;
              width: auto;
              height: ${theme.size.makeRem(200)};
            }
          `}
        `}
      />
      <div
        css={css`
          flex: 1;
          ${({ theme }) => css`
            padding-left: ${theme.size.makeRem(20)};
            padding-right: ${theme.size.makeRem(20)};
            padding-top: ${theme.size.makeRem(20)};
            padding-bottom: ${theme.size.makeRem(20)};
          `}
        `}
      >
        <Typography
          css={css`
            font-weight: ${makeFontWeight("extraBold")};
          `}
        >
          {props.title}
        </Typography>
        <Typography
          variant="caption"
          css={css`
            display: block;
            margin-top: ${({ theme }) => theme.size.makeRem(8)};
          `}
        >
          {formatShortDate(props.published_at as string)}
        </Typography>
      </div>
    </div>
  );
};

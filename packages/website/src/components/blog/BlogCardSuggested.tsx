import {
  makeDesktopStyles,
  makeFontWeight,
  makeMobileStyles,
  makeRem
} from "@htc-website/components";
import { formatShortDate } from "@htc-website/utils";
import { Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import { FC } from "react";
import { css } from "styled-components";

import { BlogCardShadow } from "./blog.card";

export const BlogCardSuggested: FC<PostOrPage> = (props) => {
  return (
    <div
      css={css`
        min-height: ${makeRem(180)};
        max-width: ${makeRem(300)};
        display: flex;
        justify-content: flex-start;
        border-radius: ${makeRem(4)};
        margin-top: ${makeRem(24)};
        transform: scale(1);
        ${BlogCardShadow};
        transition: all 0.15s ease-in-out;

        ${({ theme }) => css`
          ${makeDesktopStyles(theme)} {
            flex-direction: column;
            margin-left: ${makeRem(12)};
            margin-right: ${makeRem(12)};
            height: ${makeRem(340)};
            min-width: ${makeRem(300)};

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
            ${makeMobileStyles(theme)} {
              border-top-left-radius: inherit;
              border-bottom-left-radius: inherit;
              max-width: ${makeRem(120)};
              height: auto;
            }

            ${makeDesktopStyles(theme)} {
              border-top-left-radius: inherit;
              border-top-right-radius: inherit;
              width: auto;
              height: ${makeRem(200)};
            }
          `}
        `}
      />
      <div
        css={css`
          flex: 1;
          padding-left: ${makeRem(20)};
          padding-right: ${makeRem(20)};
          padding-top: ${makeRem(20)};
          padding-bottom: ${makeRem(20)};
        `}
      >
        <Typography
          css={css`
            && {
              font-weight: ${makeFontWeight("extraBold")};
            }
          `}
        >
          {props.title}
        </Typography>
        <Typography
          variant="caption"
          css={css`
            && {
              display: block;
              margin-top: ${makeRem(8)};
            }
          `}
        >
          {formatShortDate(props.published_at as string)}
        </Typography>
      </div>
    </div>
  );
};

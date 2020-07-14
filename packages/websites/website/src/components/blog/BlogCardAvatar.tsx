import {
  Avatar,
  Typography,
  makeFlex,
} from "@heather-turano-coaching/components";
import {
  makeInset,
  makeOutset,
  makeSize,
} from "@heather-turano-coaching/design-system";
import { ColorProperties } from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { BlogAuthor, BlogMetaInformation } from "./blog.types";

type BlogCardAvatarProps = BlogAuthor &
  BlogMetaInformation & {
    layoutType: "inline" | "stacked";
    themeType?: "light" | "dark";
  };

const avatarSize: { [key in BlogCardAvatarProps["layoutType"]]: number } = {
  stacked: 144,
  inline: 60,
};

const StyledBlogCardAvatar = styled.div<
  Required<Pick<BlogCardAvatarProps, "layoutType">>
>`
  text-transform: uppercase;
  position: relative;

  ${({ layoutType }) => {
    if (layoutType === "stacked") {
      return css`
        ${makeInset({ top: avatarSize.stacked / 2 })};

        & > .avatar {
          position: absolute;
          top: -${makeSize({ custom: avatarSize[layoutType] / 2 + 20 })};
          margin-left: -${makeSize({ custom: avatarSize[layoutType] / 2 })};
          left: 50%;
        }

        & > .alt {
          ${makeFlex("row", "center", "center")};
        }
      `;
    }
    return css`
      ${makeFlex("row", "flex-start", "center")};

      & > .avatar {
        ${makeOutset({ right: 12 })}
      }

      & > .alt {
        p {
          margin: 0;
        }
      }
    `;
  }}
`;

export const BlogCardAvatar: FC<BlogCardAvatarProps> = ({
  layoutType,
  avatarImg,
  authorName,
  datePublished,
  themeType = "dark",
}) => {
  const copyColor: ColorProperties =
    themeType === "dark"
      ? { scalable: { color: "gray", scale: 1 } }
      : { scalable: { color: "gray", scale: 3 } };

  return (
    <StyledBlogCardAvatar layoutType={layoutType}>
      <Avatar
        image={avatarImg}
        alt={authorName}
        size={{ custom: avatarSize[layoutType] }}
      />
      <div className="alt">
        <Typography
          variant="caption"
          fontSize="xs"
          fontColor={
            themeType === "dark"
              ? { scalable: { color: "secondary" } }
              : { fixed: "dark" }
          }
        >
          {authorName}
        </Typography>
        {layoutType === "stacked" && (
          <Typography variant="caption" fontSize="xs" fontColor={copyColor}>
            &nbsp;|&nbsp;
          </Typography>
        )}
        <Typography variant="label" fontSize="xs" fontColor={copyColor}>
          {datePublished}
        </Typography>
      </div>
    </StyledBlogCardAvatar>
  );
};

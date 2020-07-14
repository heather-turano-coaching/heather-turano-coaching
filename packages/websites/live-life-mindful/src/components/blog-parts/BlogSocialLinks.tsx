import {
  ColorProperties,
  SizeProperties,
} from "@heather-turano-coaching/design-system";
import {
  makeColor,
  makeOutset,
  makeReset,
  makeResponsive,
  makeSize,
} from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Icon } from "../typography";
import { makeFlex } from "../utils";
import { BlogSocialOptions } from "./blog.types";

type BlogSocialLinksProps = Partial<BlogSocialOptions> & {
  orientation?: "vertical" | "horizontal";
  linkStyle?: "color" | "grayscale";
};

const StyledBlogSocial = styled.ul<
  Required<Pick<BlogSocialLinksProps, "orientation" | "linkStyle">>
>`
  ${makeReset("list")};

  ${({ orientation, linkStyle }) =>
    (orientation === "horizontal" || linkStyle === "grayscale") &&
    makeFlex("row", "center", "center")}

  ${({ linkStyle }) =>
    linkStyle === "grayscale" &&
    css`
      width: 100%;
      background: ${makeColor({ scalable: { color: "light", scale: 3 } })};
      ${makeOutset({ vertical: 24 })};
    `}
`;

const StyledBlogSocialLink = styled.li<
  {
    linkColor: ColorProperties["scalable"];
  } & Required<Pick<BlogSocialLinksProps, "linkStyle">>
>`
  ${makeFlex("row", "center", "center")};
  height: ${makeSize({ custom: 40 })};
  width: ${makeSize({ custom: 40 })};

  ${({ linkStyle, linkColor }) => {
    if (linkStyle === "color") {
      return css`
        height: ${makeSize({ custom: 40 })};
        width: ${makeSize({ custom: 40 })};
        background: ${makeColor({ scalable: linkColor })}};
      `;
    }
    return css`
      height: ${makeSize({ custom: 52 })};
      width: ${makeSize({ custom: 52 })};

      ${makeResponsive({
        beginAt: "tabletPortrait",
        style: `
          width: ${makeSize({ custom: 80 })};
        `,
      })}
    `;
  }}
`;

export const BlogSocialLinks: FC<BlogSocialLinksProps> = ({
  linkStyle = "color",
  orientation = "vertical",
  social,
}) => {
  const iconColor: ColorProperties =
    linkStyle !== "grayscale"
      ? { fixed: "light" }
      : { scalable: { color: "gray", scale: 2 } };

  const iconSize: SizeProperties = linkStyle !== "grayscale" ? "sm" : "md";

  return social ? (
    <StyledBlogSocial orientation={orientation} linkStyle={linkStyle}>
      {social.facebook && (
        <StyledBlogSocialLink
          linkStyle={linkStyle}
          linkColor={{ color: "secondary" }}
        >
          <Icon
            icon="facebook"
            iconWeight="fab"
            iconSize={iconSize}
            iconColor={iconColor}
          />
        </StyledBlogSocialLink>
      )}
      {social.pinterest && (
        <StyledBlogSocialLink
          linkStyle={linkStyle}
          linkColor={{ color: "primary" }}
        >
          <Icon
            icon="pinterest"
            iconWeight="fab"
            iconSize={iconSize}
            iconColor={iconColor}
          />
        </StyledBlogSocialLink>
      )}
      {social.instagram && (
        <StyledBlogSocialLink
          linkStyle={linkStyle}
          linkColor={{ color: "accent" }}
        >
          <Icon
            icon="instagram"
            iconWeight="fab"
            iconSize={iconSize}
            iconColor={iconColor}
          />
        </StyledBlogSocialLink>
      )}
      {social.twitter && (
        <StyledBlogSocialLink
          linkStyle={linkStyle}
          linkColor={{ color: "gray" }}
        >
          <Icon
            icon="twitter"
            iconWeight="fab"
            iconSize={iconSize}
            iconColor={iconColor}
          />
        </StyledBlogSocialLink>
      )}
    </StyledBlogSocial>
  ) : null;
};

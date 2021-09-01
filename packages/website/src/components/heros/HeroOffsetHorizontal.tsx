import {
  theme.breakpoints.laptop,
  makeFlex,
  theme.breakpoints.mobileOnly,
  theme.size.makeRem,
  makeTabletStyles
} from "@htc-website/components";
import { CSSImageBorder } from "@htc-website/components/styles";
import React, { FC } from "react";
import { css } from "styled-components";

import {
  HeroContainer,
  HeroProps,
  HeroSubTitle,
  HeroTitle,
  HeroWrapper
} from "./HeroContainer";

export const HeroOffsetHorizontal: FC<HeroProps> = ({
  title,
  subTitle,
  image,
  imageAlt
}) => (
  <HeroWrapper>
    <HeroContainer
      css={css`
        padding-top: ${theme.size.makeRem(60)};
        padding-bottom: ${theme.size.makeRem(60)};

        ${({ theme }) => css`
          ${theme.breakpoints.laptop(theme)} {
            padding-top: ${theme.size.makeRem(100)};
            padding-bottom: ${theme.size.makeRem(100)};
          }
        `}

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          height: 70%;
          max-height: ${theme.size.makeRem(600)};
          background-color: ${({ theme }) => theme.palette.secondary.light};
          z-index: -1;
        }
      `}
    >
      <div
        css={css`
          ${({ theme }) => css`
            ${theme.breakpoints.laptop(theme)} {
              ${makeFlex({
                direction: "row",
                justify: "space-between",
                align: "center"
              })}
            }
          `}
        `}
      >
        <div
          css={css`
            padding: 0 ${theme.size.makeRem(40)};
            z-index: 10;

            ${({ theme }) => css`
              ${theme.breakpoints.mobileOnly(theme)} {
                width: 100%;
                padding-bottom: ${theme.size.makeRem(48)};
                min-height: ${theme.size.makeRem(300)};
              }

              ${makeTabletStyles(theme)} {
                height: ${theme.size.makeRem(300)};
              }

              ${theme.breakpoints.laptop(theme)} {
                height: 100%;
                width: 45%;
              }
            `}
          `}
        >
          <HeroTitle>{title}</HeroTitle>
          <HeroSubTitle>{subTitle}</HeroSubTitle>
        </div>
        <img
          src={image}
          alt={imageAlt}
          css={css`
            ${({ theme }) => css`
              ${theme.breakpoints.mobileOnly(theme)} {
                width: 100%;
                height: ${theme.size.makeRem(300)};
              }

              ${makeTabletStyles(theme)} {
                height: ${theme.size.makeRem(300)};
              }

              ${theme.breakpoints.laptop(theme)} {
                position: absolute;
                right: ${theme.size.makeRem(24)};
                top: ${theme.size.makeRem(40)};
                bottom: 0;
                width: 50%;
                height: ${`calc(100% - ${theme.size.makeRem(80)})`};
                max-height: ${theme.size.makeRem(880)};
              }
            `}

            object-fit: cover;
            object-position: center;
            ${CSSImageBorder}
          `}
        />
      </div>
    </HeroContainer>
  </HeroWrapper>
);

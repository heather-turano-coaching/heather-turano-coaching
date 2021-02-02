import {
  makeDesktopStyles,
  makeFlex,
  makeMobileStyles,
  makeRem,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { CSSImageBorder } from "components/styles";
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
        padding-top: ${makeRem(60)};
        padding-bottom: ${makeRem(60)};

        ${({ theme }) => css`
          ${makeDesktopStyles(theme)} {
            padding-top: ${makeRem(100)};
            padding-bottom: ${makeRem(100)};
          }
        `}

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          height: 70%;
          max-height: ${makeRem(600)};
          background-color: ${({ theme }) => theme.palette.secondary.light};
          z-index: -1;
        }
      `}
    >
      <div
        css={css`
          ${({ theme }) => css`
            ${makeDesktopStyles(theme)} {
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
            padding: 0 ${makeRem(40)};
            z-index: 10;

            ${({ theme }) => css`
              ${makeMobileStyles(theme)} {
                width: 100%;
                padding-bottom: ${makeRem(48)};
                min-height: ${makeRem(300)};
              }

              ${makeTabletStyles(theme)} {
                height: ${makeRem(300)};
              }

              ${makeDesktopStyles(theme)} {
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
              ${makeMobileStyles(theme)} {
                width: 100%;
                height: ${makeRem(300)};
              }

              ${makeTabletStyles(theme)} {
                height: ${makeRem(300)};
              }

              ${makeDesktopStyles(theme)} {
                position: absolute;
                right: ${makeRem(24)};
                top: ${makeRem(40)};
                bottom: 0;
                width: 50%;
                height: ${`calc(100% - ${makeRem(80)})`};
                max-height: ${makeRem(880)};
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

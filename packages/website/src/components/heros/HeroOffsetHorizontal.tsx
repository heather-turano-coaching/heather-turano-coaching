import { CSSImageBorder } from "@htc-website/components";
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
        ${({ theme }) => css`
          padding-top: ${theme.size.makeRem(60)};
          padding-bottom: ${theme.size.makeRem(60)};

          ${theme.breakpoints.laptop} {
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
          z-index: -1;

          ${({ theme }) => css`
            max-height: ${theme.size.makeRem(600)};
            background-color: ${theme.palette.secondary.light};
          `}
        }
      `}
    >
      <div
        css={css`
          ${({ theme }) => css`
            ${theme.breakpoints.laptop} {
              display: flex;
              justify-content: "space-between";
              align-items: center;
            }
          `}
        `}
      >
        <div
          css={css`
            z-index: 10;

            ${({ theme }) => css`
              padding: 0 ${theme.size.makeRem(40)};

              ${theme.breakpoints.mobileOnly} {
                width: 100%;
                padding-bottom: ${theme.size.makeRem(48)};
                min-height: ${theme.size.makeRem(300)};
              }

              ${theme.breakpoints.tablet} {
                height: ${theme.size.makeRem(300)};
              }

              ${theme.breakpoints.laptop} {
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
              ${theme.breakpoints.mobileOnly} {
                width: 100%;
                height: ${theme.size.makeRem(300)};
              }

              ${theme.breakpoints.tablet} {
                height: ${theme.size.makeRem(300)};
              }

              ${theme.breakpoints.laptop} {
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

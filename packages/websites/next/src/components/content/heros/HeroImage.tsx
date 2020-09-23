import {
  makeDesktopStyles,
  makeFlex,
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/theme";
import { Container } from "@material-ui/core";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import {
  HeroContainer,
  HeroProps,
  HeroSubTitle,
  HeroTitle,
  HeroWrapper
} from "./Hero";

export const HeroImageContent: FC = ({ children }) => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      z-index: 500;

      ${({ theme }) => css`
        color: ${theme.palette.common.white};

        ${makeMobileStyles(theme)} {
          text-align: center;
          width: 80%;
          margin: 0 auto;
          ${makeFlex({
            direction: "row",
            justify: "center",
            align: "center"
          })}
        }

        ${makeDesktopStyles(theme)} {
          ${makeFlex({
            direction: "row",
            justify: "flex-start",
            align: "center"
          })}
        }
      `}
    `}
  >
    <div
      css={css`
        ${({ theme }) => css`
          ${makeDesktopStyles(theme)} {
            max-width: 35%;
          }
        `}
      `}
    >
      {children}
    </div>
  </div>
);

export const HeroImageBg = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  outline: 1px solid #fff;
  outline-offset: -1.25rem;
  background-image: linear-gradient(270deg, transparent 42%, #4e8588 80%);
  pointer-events: none;
`;

export const HeroImageImg = styled.img`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  z-index: -2;
`;

export const HeroImage: FC<
  HeroProps & { img: string; imgAlt: string; hideGradient: boolean }
> = ({ title, subTitle, img, imgAlt, children, hideGradient = false }) => {
  return (
    <HeroWrapper>
      <HeroContainer
        css={css`
          max-width: ${makeRem(700)};
        `}
      >
        <HeroImageContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubTitle>{subTitle}</HeroSubTitle>
          {children}
        </HeroImageContent>
      </HeroContainer>
      {!hideGradient && <HeroImageBg />}
      <HeroImageImg src={img} alt={imgAlt} />
    </HeroWrapper>
  );
};

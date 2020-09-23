import {
  makeDesktopStyles,
  makeFlex,
  makeMobileStyles,
  makeRem,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { Container, Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { navbarHeight } from "../navigation/HeaderNav";

type HeroTypes =
  | "side-gradient"
  | "vertical-offset"
  | "horizontal-offset"
  | "plain-image"
  | "words-only";

type HeroProps = {
  title: string;
  subTitle: string;
};

const HeroContainer = styled(Container)`
  max-width: ${makeRem(700)};
  height: 100% !important;
`;

const HeroWrapper = styled.div`
  width: ${`calc(100% + ${makeRem(2)})`};
  min-height: ${`calc((100% + ${makeRem(2)}) - ${navbarHeight})`};
  height: ${`calc(100% - ${navbarHeight})`};
  position: relative;
  left: -${makeRem(1)};
  top: -${makeRem(1)};
  bottom: -${makeRem(1)};
  right: -${makeRem(1)};
`;

export const HeroGradientContent: FC = ({ children }) => (
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

export const HeroGradientBg = styled.div`
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

export const HeroGradientImg = styled.img`
  box-sizing: border-box;
  position: absolute;
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

export const HeroGradient: FC<HeroProps & { img: string; imgAlt: string }> = ({
  title,
  subTitle,
  img,
  imgAlt
}) => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroGradientContent>
          <Typography variant="h1" color="inherit">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {subTitle}
          </Typography>
        </HeroGradientContent>
      </HeroContainer>
      <HeroGradientBg />
      <HeroGradientImg src={img} alt={imgAlt} />
    </HeroWrapper>
  );
};

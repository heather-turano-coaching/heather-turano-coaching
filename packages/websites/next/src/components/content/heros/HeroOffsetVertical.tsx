import {
  makeDesktopStyles,
  makeFlex,
  makeMobileStyles,
  makeRem,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { rgba } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import {
  HeroContainer,
  HeroProps,
  HeroSubTitle,
  HeroTitle,
  HeroWrapper
} from "./Hero";

const whiteSpaceHeight = makeRem(300);

const HeroImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${`calc(100% - ${whiteSpaceHeight})`};
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  z-index: -2;
`;

const WhiteSpace = styled.div`
  min-height: ${whiteSpaceHeight};
  width: 100%;

  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      padding: 0 ${makeRem(24)};
    }
  `}
`;

const OpaqueBlock = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => rgba(theme.palette.light.main, 0.5)};
  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      margin: ${makeRem(24)};
    }

    ${makeTabletStyles(theme)} {
      margin: ${makeRem(24)};
    }

    ${makeDesktopStyles(theme)} {
      max-width: 60%;
    }
  `}
`;

export const HeroOffsetVertical: FC<
  HeroProps & { img: string; imgAlt: string }
> = ({ title, subTitle, img, imgAlt }) => {
  return (
    <HeroWrapper>
      <HeroContainer
        css={css`
          position: relative;
        `}
      >
        <OpaqueBlock>
          <div
            css={css`
              min-height: ${whiteSpaceHeight};
              padding: 0 ${makeRem(40)};
              ${makeFlex({
                direction: "row",
                justify: "center",
                align: "center"
              })}

              h1 {
                margin: 0 !important;
              }
            `}
          >
            <HeroTitle>{title}</HeroTitle>
          </div>
          <div
            css={css`
              padding: ${makeRem(40)};
            `}
          >
            <HeroSubTitle>{subTitle}</HeroSubTitle>
          </div>
        </OpaqueBlock>
        <WhiteSpace />
      </HeroContainer>
      <HeroImg src={img} alt={imgAlt} />
    </HeroWrapper>
  );
};

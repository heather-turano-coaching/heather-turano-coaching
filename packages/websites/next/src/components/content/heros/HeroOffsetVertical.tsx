import {
  makeDesktopStyles,
  makeFlex,
  makeMobileStyles,
  makeRem,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { Container } from "@material-ui/core";
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

const HeroImgContainer = styled.div`
  height: ${`calc(100% - ${whiteSpaceHeight})`};
  position: relative;
  width: 100%;
`;

const HeroImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
  object-position: left;
  pointer-events: none;
  z-index: -2;
`;

const OpaqueBlock = styled.div`
  background-color: ${({ theme }) => rgba(theme.palette.light.main, 0.5)};
  padding: 0 ${makeRem(40)};
  min-height: ${whiteSpaceHeight};
  ${makeFlex({
    direction: "row",
    justify: "center",
    align: "center"
  })}

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      max-width: 60%;
      padding: 0 ${makeRem(40)};
    }
  `}
`;

const OpaqueBlockContainer = styled.div<{ align: "flex-end" | "flex-start" }>`
  min-height: ${whiteSpaceHeight};
  ${({ align }) => css`
    ${makeFlex({
      direction: "row",
      justify: "flex-end",
      align: align
    })};

    padding-top: ${align === "flex-end" ? makeRem(32) : 0};
  `}
`;

export const HeroOffsetVertical: FC<
  HeroProps & { img: string; imgAlt: string }
> = ({ title, subTitle, img, imgAlt }) => {
  return (
    <HeroWrapper
      css={css`
        ${makeFlex({
          direction: "column"
        })}
      `}
    >
      <Container>
        <OpaqueBlockContainer align="flex-end">
          <OpaqueBlock>
            <HeroTitle>{title}</HeroTitle>
          </OpaqueBlock>
        </OpaqueBlockContainer>
      </Container>
      <HeroImgContainer>
        <Container>
          <OpaqueBlockContainer align="flex-start">
            <OpaqueBlock>
              <HeroSubTitle>{subTitle}</HeroSubTitle>
            </OpaqueBlock>
          </OpaqueBlockContainer>
        </Container>
        <HeroImg src={img} alt={imgAlt} />
      </HeroImgContainer>
    </HeroWrapper>
  );
};
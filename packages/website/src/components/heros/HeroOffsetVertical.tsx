import { Container } from "@htc/components";
import { rgba } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import {
  HeroProps,
  HeroSubTitle,
  HeroTitle,
  HeroWrapper
} from "./HeroContainer";

const whiteSpaceHeight = 300;

const HeroImgContainer = styled.div`
  ${({ theme }) => css`
    height: ${`calc(100% - ${theme.size.makeRem(whiteSpaceHeight)})`};
  `}
  position: relative;
  width: 100%;
  flex: 1;
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
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    min-height: ${theme.size.makeRem(whiteSpaceHeight)};
    background-color: ${rgba(theme.palette.light.main, 0.5)};
    padding: 0 ${theme.size.makeRem(40)};

    ${theme.breakpoints.laptop} {
      max-width: 60%;
      width: 60%;
      justify-content: flex-start;
      padding: 0 ${theme.size.makeRem(40)};
    }
  `}
`;

const OpaqueBlockContainer = styled.div<{ align: "flex-end" | "flex-start" }>`
  min-height: ${whiteSpaceHeight};
  ${({ align, theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: align;
    padding-top: ${align === "flex-end" ? theme.size.makeRem(32) : 0};
  `}
`;

export const HeroOffsetVertical: FC<HeroProps> = ({
  title,
  subTitle,
  image,
  imageAlt
}) => {
  return (
    <HeroWrapper
      css={css`
        display: flex;
        flex-direction: column;
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
          <OpaqueBlockContainer
            align="flex-start"
            css={css`
              padding-bottom: ${({ theme }) => theme.size.makeRem(400)};
            `}
          >
            <OpaqueBlock>
              <HeroSubTitle>{subTitle}</HeroSubTitle>
            </OpaqueBlock>
          </OpaqueBlockContainer>
        </Container>
        <HeroImg src={image} alt={imageAlt} />
      </HeroImgContainer>
    </HeroWrapper>
  );
};

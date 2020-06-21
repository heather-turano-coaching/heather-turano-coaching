import {
  makeColor,
  makeInset,
  makeOutset,
  makeReset,
  makeResponsive,
  makeSize,
} from "@heather-turano-coaching/design-system";
import React, { FC, useMemo } from "react";
import styled, { css } from "styled-components";

import { Typography } from "../display";
import { fontColor } from "./Footer.vars";

export type FooterSectionProps = { title: string; sectionSize?: "1" | "2" };

const StyledFooterSection = styled.div<Pick<FooterSectionProps, "sectionSize">>`
  ${({ sectionSize }) => css`
    flex: ${sectionSize};
  `}
  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      width: 100%;
      
      &:not(:first-child){
        ${makeInset({ bottom: 40 })};
      }
    `,
  })}

  & > p {
    ${makeOutset({ bottom: 24 })}
    font-weight: 700;
    text-transform: uppercase;
  }

  &:not(:first-child) {
    margin-left: ${makeSize({ custom: 32 })};
  }
`;

const StyledFooterSectionTitle = styled.div`
  position: relative;
  text-transform: uppercase;
  ${makeOutset({ bottom: 16 })};
  ${makeInset({ bottom: 8 })};
  text-align: left;

  &:after {
    content: "";
    display: block;
    height: ${makeSize({ custom: 2 })};
    background: ${makeColor({ scalable: { color: "accent", scale: 0 } })};
    left: 0;
    bottom: 0;
    position: absolute;
    width: ${makeSize({ custom: 60 })};
  }

  p {
    font-weight: 800;
  }
`;

const StyledFooterSectionBody = styled.div`
  ${makeReset("list")};

  & > li {
    ${makeOutset({ bottom: 12 })}
  }

  a {
    text-decoration: none;
    ${makeOutset({ bottom: 12 })};
  }
`;

export const FooterSection: FC<FooterSectionProps> = ({
  title,
  sectionSize = "1",
  children,
}) => (
  <StyledFooterSection sectionSize={sectionSize}>
    {useMemo(
      () => (
        <StyledFooterSectionTitle>
          <Typography variant="label" fontSize="xs" fontColor={fontColor}>
            {title}
          </Typography>
        </StyledFooterSectionTitle>
      ),
      [title]
    )}
    <StyledFooterSectionBody>{children}</StyledFooterSectionBody>
  </StyledFooterSection>
);

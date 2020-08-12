import {
  makeColor,
  makeInset,
  makeResponsive
} from "@heather-turano-coaching/design-system";
import { darken } from "polished";
import { FC } from "react";
import React from "react";
import styled from "styled-components";

import { Container, sectionVSpace } from "../layout";
import { makeFlex, sharedHorizontalBodyPadding } from "../utils";

const StyledFooterContainer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  background: ${darken(0.1, makeColor({ scalable: { color: "secondary" } }))};
  ${makeInset({
    vertical: 40,
    horizontal: sharedHorizontalBodyPadding.phone
  })};

  * {
    box-sizing: border-box;
  }

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({
        vertical: sectionVSpace.tabletPortrait,
        horizontal: sharedHorizontalBodyPadding.tabletPortrait
      })};
    `
  })}
`;

const StyledFooter = styled.div`
  ${makeFlex("column-reverse", "flex-start", "flex-start")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
    ${makeFlex("row", "flex-start", "flex-start")};
      padding-bottom: 0;
      margin: 0 auto;
    `
  })};
`;

export const Footer: FC = ({ children }) => (
  <StyledFooterContainer>
    <Container>
      <StyledFooter>{children}</StyledFooter>
    </Container>
  </StyledFooterContainer>
);

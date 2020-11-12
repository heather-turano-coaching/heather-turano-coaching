import { Container } from "@material-ui/core";
import { darken } from "polished";
import { FC } from "react";
import React from "react";
import styled, { css } from "styled-components";

import { makeColor, makeInset, makeResponsive } from "../../design-system";
import { makeRem, makeTabletStyles } from "../../theme";
import { makeFlex } from "../utils";

const StyledFooterContainer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  background: ${darken(0.1, makeColor({ scalable: { color: "secondary" } }))};
  ${makeInset({
    vertical: 40
  })};

  * {
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    ${makeTabletStyles(theme)} {
      padding: ${makeRem(48)} 0;
    }
  `}
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
    <Container maxWidth="lg">
      <StyledFooter>{children}</StyledFooter>
    </Container>
  </StyledFooterContainer>
);

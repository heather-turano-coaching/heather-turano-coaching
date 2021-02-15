import { makeColor, makeInset } from "@htc/design-system";
import { makeDesktopStyles, makeRem, makeTabletStyles } from "@htc/theme";
import { Container } from "@material-ui/core";
import { darken } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

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
  display: column;
  flex-direction: column-reverse;

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      flex-direction: row;
      display: flex;
      padding-bottom: 0;
      margin: 0 auto;
    }
  `}
`;

export const Footer: FC = ({ children }) => (
  <StyledFooterContainer>
    <Container maxWidth="lg">
      <StyledFooter>{children}</StyledFooter>
    </Container>
  </StyledFooterContainer>
);

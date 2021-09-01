import { darken } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { makeColor, makeInset } from "../design-system";
import { Container } from "../layout";

const StyledFooterContainer = styled.footer.attrs({
  id: "footer"
})`
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
    ${theme.breakpoints.tablet} {
      padding: ${theme.size.makeRem(48)} 0;
    }
  `}
`;

const StyledFooter = styled.div`
  display: column;
  flex-direction: column-reverse;

  ${({ theme }) => css`
    ${theme.breakpoints.laptop} {
      flex-direction: row;
      display: flex;
      padding-bottom: 0;
      margin: 0 auto;
    }
  `}
`;

export const Footer: FC = ({ children }) => (
  <StyledFooterContainer>
    <Container>
      <StyledFooter>{children}</StyledFooter>
    </Container>
  </StyledFooterContainer>
);

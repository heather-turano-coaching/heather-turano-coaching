import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import React, { FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
  css
} from "styled-components";

import { themeConfig } from "./theme.config";
import { cssReset, makeMobileStyles } from ".";

const GlobalStyle = createGlobalStyle`
  ${cssReset};

  #root, #__next, #__gatsby  {
    top: 0;
    width: 100%;
    display: initial;
    overflow-x: hidden;
  };

  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      html,
      body {
        font-size: 14px;
      }
    }
  `}
`;

export const HTCTheme: FC = ({ children }) => {
  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={themeConfig}>
          <StyledThemeProvider theme={themeConfig}>
            <GlobalStyle />
            {children}
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

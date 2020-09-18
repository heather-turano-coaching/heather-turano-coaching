import {
  MuiThemeProvider,
  StylesProvider,
  Theme,
  createMuiTheme
} from "@material-ui/core";
import React, { FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from "styled-components";

import { cssReset } from ".";

export const GlobalStyle = createGlobalStyle`
  ${cssReset};

  #root, #__next, #__gatsby  {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  };
`;

export const createTheme = (): Theme => createMuiTheme({});

export const HTCTheme: FC = ({ children }) => {
  const materialTheme = createTheme();

  return (
    <>
      <GlobalStyle />
      <StylesProvider>
        <MuiThemeProvider theme={materialTheme}>
          <StyledThemeProvider theme={materialTheme}>
            {children}
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

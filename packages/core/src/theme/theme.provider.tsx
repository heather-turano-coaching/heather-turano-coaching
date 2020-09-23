import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from "@material-ui/core";
import React, { FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from "styled-components";

import { cssReset } from ".";

const GlobalStyle = createGlobalStyle`
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

export const theme = createMuiTheme({
  palette: {
    // Deep Blue/Green
    primary: {
      dark: "#4E8588",
      main: "#88ADAF",
      light: "#C2D5D6"
    },
    // Tan
    secondary: {
      dark: "#BF9F5A",
      main: "#D4BE90",
      light: "#E9DEC6"
    },
    // Light green
    accent: {
      dark: "#9AC371",
      main: "#BBD69F",
      light: "#DCEACE",
      contrastText: "#4E8588"
    },
    // darkscale
    noir: {
      dark: "#4A4A4A",
      main: "#858585",
      light: "#C1C1C1",
      contrastText: "#FFF"
    },
    // lightscale
    light: {
      dark: "#EAECEC",
      main: "#F0F2F2",
      light: "#F7F8F8",
      contrastText: "#4E8588"
    }
  }
});

export const HTCTheme: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StylesProvider>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

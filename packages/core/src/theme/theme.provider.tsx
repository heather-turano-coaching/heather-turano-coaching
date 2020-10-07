import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from "@material-ui/core";
import React, { FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
  css
} from "styled-components";

import { cssReset, makeMobileStyles, makeRem } from ".";

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
  },
  typography: {
    fontFamily: "Muli",
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 1,
      fontSize: makeRem(58),
      margin: `${makeRem(24)} 0`
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(48),
      margin: `${makeRem(24)} 0`
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(36),
      margin: `${makeRem(24)} 0`
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(24),
      margin: `${makeRem(24)} 0`
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(18),
      margin: `${makeRem(24)} 0`
    },
    subtitle1: {
      fontFamily: "Muli",
      fontWeight: 500,
      fontSize: makeRem(22),
      margin: `${makeRem(20)} 0`
    },
    subtitle2: {
      fontWeight: 500,
      fontFamily: "Muli",
      fontSize: makeRem(18)
    }
  }
});

export const HTCTheme: FC = ({ children }) => {
  return (
    <>
      <StylesProvider>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

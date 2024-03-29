import {
  MuiThemeProvider,
  StylesProvider,
  createTheme
} from "@material-ui/core";
import React, { FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
  css
} from "styled-components";

import { themeOverrides } from "./theme.config.overrides";
import { themePalette } from "./theme.config.palette";
import { themeProps } from "./theme.config.props";
import { cssReset } from "./theme.reset";
import { makeFontWeight, makeMobileStyles, makeRem } from "./theme.utils";

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
        font-size: 16px;
      }
    }
  `}

  * {
    box-sizing: border-box;
  }
`;

const theme = createTheme({
  palette: themePalette,
  typography: {
    fontFamily: "Muli",
    h1: {
      fontFamily: "Montserrat",
      fontSize: makeRem(38),
      fontWeight: makeFontWeight("semiBold"),
      margin: `${makeRem(16)} 0`,
      lineHeight: 1.2,

      "@media (min-width:600px)": {
        fontSize: makeRem(44),
        fontWeight: makeFontWeight("regular"),
        margin: `${makeRem(24)} 0`,
        lineHeight: 1.2
      }
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: makeRem(38),
      fontWeight: makeFontWeight("regular"),
      margin: `${makeRem(16)} 0`,

      "@media (min-width:600px)": {
        fontSize: makeRem(36),
        margin: `${makeRem(24)} 0`
      }
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: makeRem(32),
      fontWeight: 600,
      margin: `${makeRem(18)} 0`
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(24),
      margin: `${makeRem(16)} 0`
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(18),
      margin: `${makeRem(16)} 0`
    },
    subtitle1: {
      fontFamily: "Muli",
      fontWeight: 500,
      fontSize: makeRem(18),
      margin: `${makeRem(20)} 0`
    },
    subtitle2: {
      fontWeight: 500,
      fontFamily: "Muli",
      fontSize: makeRem(16)
    },
    overline: {
      fontWeight: makeFontWeight("bold"),
      fontSize: makeRem(14),
      lineHeight: 2
    }
  },
  overrides: themeOverrides,
  props: themeProps
});

export const HTCTheme: FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

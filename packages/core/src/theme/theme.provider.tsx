import {
  MuiThemeProvider,
  StylesProvider,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import React, { FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
  css
} from "styled-components";

import { themeOverrides } from "./theme.config.overrides";
import { themePalette } from "./theme.config.palette";
import { themeProps } from "./theme.config.props";
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

export const makeTheme = () =>
  createMuiTheme({
    palette: themePalette,
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
    },
    overrides: themeOverrides,
    props: themeProps
  });

export const HTCTheme: FC<{ appTheme: Theme }> = ({ children, appTheme }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={appTheme}>
        <StyledThemeProvider theme={appTheme}>
          <GlobalStyle />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

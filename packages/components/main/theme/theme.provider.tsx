import React, { FC, useMemo } from "react";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle
} from "styled-components";

import { createTheme } from "./theme.config";

const StyledComponentsGolbalStyle = createGlobalStyle`
    html {
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  ul,
  ol,
  li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:visited {
      color: inherit;
    }
  }

  #root, #__next, #__gatsby  {
    top: 0;
    width: 100%;
    display: initial;
    overflow-x: hidden;
  };

  * {
    box-sizing: border-box;
  }
`;

export const ThemeProvider: FC = ({ children }) => {
  const theme = useMemo(() => createTheme(), []);

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <StyledComponentsGolbalStyle />
      {children}
    </StyledComponentsThemeProvider>
  );
};

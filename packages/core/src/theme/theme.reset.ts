import { css } from "styled-components";

export const cssReset = css`
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

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:visited {
      color: inherit;
    }
  }
`;

import { ApolloProvider } from "@apollo/client";
import { makeReset } from "@heather-turano-coaching/design-system";
import React, { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

import { client } from "../apollo";

const GlobalStyle = createGlobalStyle`
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;

    * {
      box-sizing: border-box;

      &::after, &::before {
        box-sizing: border-box;
      }
    }
  }

  ul {
    ${makeReset("list")}
  }
`;

export const wrapRootElement = ({ element }: { element: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      {element}
    </ApolloProvider>
  );
};

import { ApolloProvider } from "@apollo/client";
import {
  makeFontFace,
  makeReset,
  makeResponsive,
} from "@heather-turano-coaching/design-system";
import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import { client } from "../apollo";

const fontFaceDefs = makeFontFace();
const fontFaceLinks = fontFaceDefs.reduce(
  (accum, fontFaceDef, i) =>
    typeof fontFaceDef === "string"
      ? [
          ...accum,
          <link
            key={`link-${i.toString()}`}
            rel="stylesheet"
            href={fontFaceDef.split('("')[1].split('")')[0]}
          />,
        ]
      : accum,
  [] as ReactNode[]
);

const GlobalStyle = createGlobalStyle`
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${makeResponsive({
      beginAt: "desktop",
      style: `
        font-size: 18px;
      `,
    })}
  }

  html, body {
    margin: 0;
    padding: 0;

  }

  body {
    overflow-x: hidden;
  }

  ul {
    ${makeReset("list")}
  }

  #htc-root {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;

    * {
      box-sizing: border-box;

      &::after, &::before {
        box-sizing: border-box;
      }
    }
  }
`;

export const wrapRootElement = ({ element }: { element: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Helmet>{fontFaceLinks}</Helmet>
      {element}
    </ApolloProvider>
  );
};

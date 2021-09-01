/* eslint-disable @next/next/no-css-tags */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import React, { Fragment, ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element[];
    html: string;
    head?: JSX.Element[];
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) =>
            function EnchanceApp(props) {
              return sheet.collectStyles(<App {...props} />);
            }
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        head: initialProps.head as JSX.Element[],
        styles: [
          <Fragment key="doc-styles">
            {React.Children.toArray(initialProps.styles)}
            {sheet.getStyleElement()}
          </Fragment>
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/fonts/muli/muli.css" />
          <link rel="stylesheet" href="/fonts/montserrat/montserrat.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

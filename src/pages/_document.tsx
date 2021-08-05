import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import React, { Fragment, ReactElement } from "react";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element[];
    html: string;
    head?: JSX.Element[];
  }> {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            )
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        head: initialProps.head as JSX.Element[],
        styles: [
          <Fragment key="doc-styles">
            {React.Children.toArray(initialProps.styles)}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </Fragment>
        ]
      };
    } finally {
      styledComponentSheet.seal();
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

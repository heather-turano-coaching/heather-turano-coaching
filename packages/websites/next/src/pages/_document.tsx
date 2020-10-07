import { FontLinks } from "@heather-turano-coaching/core/theme";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import React, { ReactElement } from "react";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            )
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>
        ]
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <FontLinks />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

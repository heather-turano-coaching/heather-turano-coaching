import { FontLinks } from "@heather-turano-coaching/core/theme";
import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement()
      ]
    };
  }

  render() {
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

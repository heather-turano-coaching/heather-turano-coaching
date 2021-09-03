import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import React from "react";

import * as Components from "../../lib";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Components.HTCThemeProvider>
      <MDXProvider components={Components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Components.HTCThemeProvider>
  );
}
export default MyApp;

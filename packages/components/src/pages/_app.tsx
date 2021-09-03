import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import React, { useMemo } from "react";

import * as Components from "../../lib";
import { createHTCTheme } from "../../lib";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMemo(() => createHTCTheme(), []);

  return (
    <Components.HTCThemeProvider theme={theme}>
      <MDXProvider components={Components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Components.HTCThemeProvider>
  );
}
export default MyApp;

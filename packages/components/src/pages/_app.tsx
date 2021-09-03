import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import React, { useMemo } from "react";

import * as Components from "../../lib";
import * as DocComponents from "../../lib/_docs";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMemo(() => Components.createHTCTheme(), []);

  return (
    <Components.HTCThemeProvider theme={theme}>
      <MDXProvider
        components={{
          ...Components,
          ...DocComponents
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </Components.HTCThemeProvider>
  );
}
export default MyApp;

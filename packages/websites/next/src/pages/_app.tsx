import { HTCTheme } from "@heather-turano-coaching/core/theme";
import { FooterNav } from "components/content";
import { HeaderNav } from "components/content/navigation/HeaderNav";
import { SWRProvider } from "lib/swr.provider";
import { AppProps } from "next/app";
import React, { ReactElement } from "react";

export default function MyApp({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <SWRProvider>
      <HTCTheme>
        <HeaderNav />
        <Component {...pageProps} />

        <FooterNav />
      </HTCTheme>
    </SWRProvider>
  );
}

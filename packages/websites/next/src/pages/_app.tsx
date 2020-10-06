import { HTCTheme } from "@heather-turano-coaching/core/theme";
import { FooterNav } from "components/content";
import { HeaderNav } from "components/content/navigation/HeaderNav";
import { SWRProvider } from "lib/swr.provider";
import type { AppProps } from "next/app";
import React, { ReactElement } from "react";
import { css } from "styled-components";

export default function MyApp({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <SWRProvider>
      <HTCTheme>
        <div
          css={css`
            height: 100%;
            overflow-y: auto;
          `}
        >
          <HeaderNav />
          <Component {...pageProps} />

          <FooterNav />
        </div>
      </HTCTheme>
    </SWRProvider>
  );
}

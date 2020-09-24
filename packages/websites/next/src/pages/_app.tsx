import { HTCTheme } from "@heather-turano-coaching/core/theme";
import { FooterNav } from "components/content";
import { HeaderNav } from "components/content/navigation/HeaderNav";
import type { AppProps } from "next/app";
import { css } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

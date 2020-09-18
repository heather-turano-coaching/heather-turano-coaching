import { HTCTheme } from "@heather-turano-coaching/core/theme";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HTCTheme>
      <Component {...pageProps} />
    </HTCTheme>
  );
}

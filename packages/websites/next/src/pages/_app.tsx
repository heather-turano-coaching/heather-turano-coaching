import { AppProps } from "next/app";
import React, { ReactElement } from "react";

export default function MyApp({
  Component,
  pageProps
}: AppProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getLayout = Component.getPageLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

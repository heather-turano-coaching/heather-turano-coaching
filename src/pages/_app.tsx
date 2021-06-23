import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { ReactElement, useEffect } from "react";
import { defaultSeoConfig } from "src/features/seo";

export default function MyApp({
  Component,
  pageProps
}: AppProps): ReactElement {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getLayout = Component.getPageLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <DefaultSeo {...defaultSeoConfig} />
      <Component {...pageProps} />
    </>
  );
}

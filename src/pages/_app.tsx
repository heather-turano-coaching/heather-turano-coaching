import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import React, { ReactElement, useEffect } from "react";

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
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://heatherturanocoaching.com",
          site_name: "Heather Turano Coaching"
        }}
        twitter={{
          handle: "@heatherturanocoaching",
          site: "@site",
          cardType: "summary_large_image"
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

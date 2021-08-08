import { makeRem } from "@htc/theme";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { defaultSeoConfig } from "src/features/seo";

export default function MyApp({
  Component,
  pageProps
}: AppProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      router.events.on("routeChangeStart", (url) => {
        if (window && window._paq) {
          window._paq.push(["setCustomUrl", url]);
          window._paq.push(["setDocumentTitle", document.title]);
          window._paq.push(["trackPageView"]);
        }
      });
    }
  }, [router.events]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getLayout = Component.getPageLayout || ((page) => page);
  const preview = pageProps.preview || false;

  return getLayout(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        {preview && (
          <style>{`html {
            border: ${makeRem(6)} solid hotpink;
        }`}</style>
        )}
        {/* Matoma */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://heatherturanocoaching.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src='//cdn.matomo.cloud/heatherturanocoaching.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();

          `
            }}
          />
        )}
      </Head>
      <DefaultSeo {...defaultSeoConfig} />
      <Component {...pageProps} />
    </>,
    pageProps
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProvider } from "@auth0/nextjs-auth0";
import { CookiesConsent } from "@htc/features/cookies";
import { SWRProvider } from "@htc/lib/swr";
import { HTCTheme, makeRem } from "@htc/theme";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { ReactElement, useEffect } from "react";
import { defaultSeoConfig } from "src/features/seo";
import { css } from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./_app.css";

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
  const preview = pageProps.preview || false;

  return (
    <HTCTheme>
      <SWRProvider>
        <UserProvider>
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
          </Head>
          <DefaultSeo {...defaultSeoConfig} />
          <Component {...pageProps} />
          {/* Matoma */}
          <CookiesConsent
            namespace="heatherturanocoaching"
            description={
              <div>
                Some of them are essential and some of them are related to
                helping us better understand you, but <strong>ALL</strong> of
                them are used to help us provide you the best and most{" "}
                <strong>private</strong> experince possible.
                <br />
                <br />
                We never have and <strong>never will</strong> collect and/or
                sell your personal data. Read more about our use of cookies in
                our{" "}
                <Link href="/legal/privacy-policy">
                  <a
                    css={css`
                      text-decoration: underline;
                    `}
                  >
                    privacy policy
                  </a>
                </Link>
                <span>.</span>
              </div>
            }
          >
            {process.env.NODE_ENV === "production" && (
              <Script
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
  })();`
                }}
              />
            )}
          </CookiesConsent>
        </UserProvider>
      </SWRProvider>
    </HTCTheme>
  );
}

import { ParsedUrlQuery } from "querystring";

import type { IWebPage } from "@htc/contentful";
import {
  GetServerSideProps,
  GetStaticProps,
  NextComponentType,
  NextPageContext
} from "next";
import { AppProps } from "next/app";
import { FC } from "react";

export type PageProps<P = Record<string, unknown>> = {
  preview: boolean | undefined;
} & P;
export type ContentfulPageData = {
  contentfulPageData: IWebPage;
};
export type ContentfulPageProps<P = Record<string, unknown>> =
  ContentfulPageData & PageProps<P>;

export type WithPage<P> = (
  FeaturePageComponent: FeaturePageComponent<P>
) => FC<P & PageProps<P>>;

export type PageLayout<P = Record<string, unknown>> = FC<PageProps<P>>;

export type WithPageLayout<P = PageProps> = (
  PageComponent: FC<PageProps<P>>
) => FC<PageProps<P>>;

// `src/feature` pages
export type FeaturePageComponent<P = PageProps> = React.FC<P> & {
  withPageLayout: WithPageLayout<PageProps<P>>;
};

// utils
export type GetAuthenticatedServerSideProps<
  P = Record<string, unknown>,
  UrlQuery extends ParsedUrlQuery = ParsedUrlQuery
> = GetServerSideProps<P, UrlQuery>;

export type CustomAppProps<P = Record<string, unknown>> = Omit<
  AppProps<P>,
  "pageProps"
> & {
  pageProps: Record<string, unknown>;
  err?: Error & {
    statusCode?: number;
  };
  Component: NextComponentType<NextPageContext>;
};

export type ContentfulPageAttributes = {
  contentfulPageData: IWebPage;
};

/**
 * Augmented type intended to be a replacement for GetStaticProps.
 * This automatically requires that a contentfulEntryId and the
 * web page data from contentful is added to every page props
 */
export type GetContentfulPageProps<T = Record<string, unknown>> =
  GetStaticProps<ContentfulPageAttributes & { preview: boolean } & T>;
export type GetGhostPageProps<T = Record<string, unknown>> = GetStaticProps<
  { preview: boolean } & T
>;

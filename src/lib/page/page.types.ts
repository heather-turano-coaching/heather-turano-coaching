import { GetStaticProps } from "next";
import { ReactNode } from "react";

import { IWebPage } from "../server/contentful";

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

/**
 * Dynamic type to be used when typing the return of
 * a fetching method in any feature utils. This type is
 * designed to be attached to a function that can be used
 * on both the server and the client. Specifically when
 * re-fetching the data on the client
 *
 * @example
 * ```ts
 * export const getServicesPageData: GetPageData<ServicesPageProps> = () => {
 *  return {
 *    contentfulPageData,
 *    ...blogProps
 *  }
 * }
 * ```
 */
export type GetPageData<T = Record<string, unknown>, Params = undefined> = (
  params?: Params
) => Promise<ContentfulPageAttributes & T>;

/**
 * To be used for every static proxied page
 */
export type GetPageLayout<P> = (
  page: ReactNode | React.ElementType,
  pageProps: P & { preview: boolean | undefined }
) => ReactNode;
export type PageComponent<P = Record<string, unknown>> = React.FC<
  P & ContentfulPageAttributes
> & {
  getPageLayout: GetPageLayout<P>;
};

/**
 * Type to be used to construct the props of each
 * feature page.
 */
export type PageProps<T> = GetStaticProps<ContentfulPageAttributes & T>;

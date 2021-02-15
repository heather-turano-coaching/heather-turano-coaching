import { GetStaticProps } from "next";
import { ReactNode } from "react";

import { IWebPage } from "../contentful";

export type ContentfulPageAttributes = {
  contentfulPageEntryId: string;
  contentfulPageData: IWebPage;
};

/**
 * Augmented type intended to be a replacement for GetStaticProps.
 * This automatically requires that a contentfulEntryId and the
 * web page data from contentful is added to every page props
 */
export type GetPageProps<T> = GetStaticProps<ContentfulPageAttributes & T>;

/**
 * Dynamic type to be used when typing the return of
 * a fetching method in any feature utils. This type is
 * designed to be attached to a function that can be used
 * on both the server and the client. Specifically when
 * re-fetching the data on the client
 *
 * @example
 * ```ts
 * export const getBlogPageData: GetPageData<BlogPageProps> = () => {
 *  return {
 *    contentfulPageEntryId,
 *    contentfulPageData,
 *    ...blogProps
 *  }
 * }
 * ```
 */
export type GetPageData<T> = () => Promise<ContentfulPageAttributes & T>;

/**
 * To be used for every static proxied page
 */
export type PageComponent<P = Record<string, unknown>> = React.FC<
  P & ContentfulPageAttributes
> & {
  getPageLayout: (page: ReactNode) => ReactNode;
};

/**
 * Type to be used to construct the props of each
 * feature page.
 */
export type PageProps<T> = GetStaticProps<ContentfulPageAttributes & T>;

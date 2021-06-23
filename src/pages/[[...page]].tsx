import path from "path";

import { GetPageProps, PageComponent } from "@htc/lib/page";
import {
  getAllContentfulPages,
  getContentfulPageById
} from "@htc/lib/server/contentful";
import fs from "fs-extra";
import { GetStaticPaths } from "next";
import { DynamicPage } from "src/features/dynamic";
import { ContentfulSeo } from "src/features/seo";

const blacklistedPages = ["blog", "events", "services"];
const pagePathDataFile = path.resolve("./public/posts.json");
type PageCache = {
  [key in string]: string;
};

type DyanmicPagePathParams = { page: string[] | undefined };

export const getStaticPaths: GetStaticPaths<DyanmicPagePathParams> =
  async () => {
    const pages = await getAllContentfulPages();
    const pagesDataArr = pages.items.map((page) => ({
      pageName: page.fields.url === "index" ? undefined : page.fields.url,
      pageId: page.sys.id
    }));
    const pagesData = pagesDataArr.reduce<PageCache | Record<string, unknown>>(
      (accum, data) => {
        return {
          ...accum,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          [data.pageName]: data.pageId
        };
        return accum;
      },
      {}
    );
    await fs.writeJSON(pagePathDataFile, pagesData);
    const paths = pagesDataArr.reduce<{ params: DyanmicPagePathParams }[]>(
      (accum, p) => {
        // If the pageName was undefined, pass the param as undefined
        // so NextJS will render it as the root URL
        if (typeof p.pageName === "undefined") {
          return [
            ...accum,
            {
              params: {
                page: undefined
              }
            }
          ];
        }
        /**
         * If we haven't blacklisted the pages, include it
         * in the dynamic catch all page build
         */
        if (!blacklistedPages.includes(p.pageName)) {
          return [
            ...accum,
            {
              params: {
                page: [p.pageName]
              }
            }
          ];
        }

        /**
         * Just return everything since nothing matched
         */
        return accum;
      },
      []
    );

    return {
      paths,
      fallback: false
    };
  };

export const getStaticProps: GetPageProps = async ({ params }) => {
  try {
    const cache = (await fs.readJson(pagePathDataFile)) as PageCache;
    const page = params?.page as string;
    const pageId = cache[page];

    const contentfulPageData = await getContentfulPageById(pageId);

    return {
      props: {
        contentfulPageEntryId: pageId,
        contentfulPageData
      }
    };
  } catch (error) {
    throw error;
  }
};

const Page: PageComponent = (props) => {
  return (
    <>
      <ContentfulSeo {...props} />
      <DynamicPage {...props} />
    </>
  );
};

Page.getPageLayout = DynamicPage.getPageLayout;

export default Page;

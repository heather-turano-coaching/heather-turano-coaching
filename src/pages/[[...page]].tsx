import path from "path";

import { DynamicPage, DynamicPageProps } from "@htc/components/feature/dynamic";
import { IWebPage } from "@htc/domain/contentful";
import { getAllContentfulPages, getEntryById } from "@htc/lib/contentful";
import { PageComponent } from "@htc/lib/page";
import fs from "fs-extra";
import { GetStaticPaths, GetStaticProps } from "next";

const blacklistedPages = ["blog", "events", "services"];
const pagePathDataFile = path.resolve("./public/posts.json");
type PageCache = {
  pageName: string;
  pageId: string;
};

export const getStaticPaths: GetStaticPaths<{
  page: string;
}> = async () => {
  const pages = await getAllContentfulPages();
  const pagesDataArr = pages.items.map((page) => ({
    pageName: page.fields.url === "index" ? undefined : page.fields.url,
    pageId: page.sys.id
  }));
  const pagesData = pagesDataArr.reduce<PageCache>(
    (accum, data) => ({
      ...accum,
      [data.pageName]: data.pageId
    }),
    {} as PageCache
  );
  await fs.writeJSON(pagePathDataFile, pagesData);
  const paths = pagesDataArr.reduce((accum, p) => {
    if (!blacklistedPages.includes(p.pageName)) {
      return [
        ...accum,
        {
          params: {
            page: p.pageName ? [p.pageName] : undefined
          }
        }
      ];
    }
    return accum;
  }, []);

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<DynamicPageProps> = async ({
  params
}) => {
  const cache = (await fs.readJson(pagePathDataFile)) as PageCache;
  const page = params.page as string;
  const data = await getEntryById<IWebPage>(cache[page]);
  return {
    props: {
      pageId: cache[page],
      data
    }
  };
};

const Page: PageComponent<DynamicPageProps> = ({ pageId, ...restProps }) => {
  return <DynamicPage pageId={pageId} {...restProps} />;
};

Page.getPageLayout = DynamicPage.getPageLayout;

export default Page;

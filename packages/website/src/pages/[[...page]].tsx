import path from "path";

import { IWebPage } from "@heather-turano-coaching/domain";
import { DynamicPage, DynamicPageProps } from "components/feature/dynamic";
import fs from "fs-extra";
import { getAllContentfulPages, getEntryById } from "lib/contentful";
import { PageComponent } from "lib/page";
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

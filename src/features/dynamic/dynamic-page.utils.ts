import { getContentfulPageById } from "@htc/lib/contentful";
import { GetPageData } from "@htc/lib/page";

export const getDynamicPageProps: GetPageData<
  Record<string, unknown>,
  string
> = async (pageId) => {
  if (pageId) {
    const contentfulPageData = await getContentfulPageById(pageId);

    return {
      contentfulPageEntryId: pageId,
      contentfulPageData
    };
  }
  throw new Error("A PageID wasn't supplied to a dynamic page");
};

import { withPage } from "@htc/features/page";
import {
  IWebPage,
  getAllContentfulPages,
  getContentfulPageBySlug
} from "@htc/lib/server/contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { DynamicPage, DynamicPageProps } from "src/features/dynamic-page";

const blacklistedPages = ["blog", "events", "services", "index"];

export const getStaticPaths: GetStaticPaths<{ page: string[] | undefined }> =
  async () => {
    const pages = await getAllContentfulPages({
      preview: false
    });
    const paths = pages.items.reduce<
      { params: { page: string[] | undefined } }[]
    >(
      (accum, item) => {
        if (!item) {
          return accum;
        }

        if (item && !blacklistedPages.includes(item.fields.url)) {
          return [
            ...accum,
            {
              params: {
                page: [item.fields.url]
              }
            }
          ];
        }
        return accum;
      },
      [
        {
          params: {
            page: undefined
          }
        }
      ]
    );

    return {
      paths,
      fallback: false
    };
  };

export const getStaticProps: GetStaticProps<DynamicPageProps> = async ({
  params,
  preview = false
}) => {
  const slug =
    typeof params?.page?.[0] === "string" ? params?.page?.[0] : "index";

  const pages = await getContentfulPageBySlug(slug, { preview });
  const pageData = pages.items[0];

  return {
    props: {
      preview,
      contentfulPageData: pageData as unknown as IWebPage
    },
    revalidate: 10
  };
};

export default withPage(DynamicPage);

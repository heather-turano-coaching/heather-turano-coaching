import { withPage } from "@htc/features/page";
import {
  IWebPage,
  getAllContentfulPages,
  getContentfulPageBySlug
} from "@htc/lib/server/contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { DynamicPage, DynamicPageProps } from "src/features/dynamic-page";

const blacklistedPages = ["/blog", "/events", "/services"];

export const getStaticPaths: GetStaticPaths<{ page: string[] | undefined }> =
  async () => {
    const pages = await getAllContentfulPages({
      preview: false
    });

    const paths = pages.items.reduce<
      { params: { page: string[] | undefined } }[]
    >((accum, item) => {
      if (
        item &&
        !blacklistedPages.includes(item.fields.navbarItem.fields.url)
      ) {
        return [
          ...accum,
          {
            params: {
              page:
                item.fields.navbarItem.fields.url === "/"
                  ? undefined
                  : [item.fields.navbarItem.fields.url]
            }
          }
        ];
      }
      return accum;
    }, []);

    return {
      paths,
      fallback: "blocking"
    };
  };

export const getStaticProps: GetStaticProps<DynamicPageProps> = async ({
  params,
  preview = false
}) => {
  console.log(params);
  const slug = params?.page?.[0] ? `/${params.page[0]}` : "/";
  const page = await getContentfulPageBySlug(slug as string, {
    preview
  });
  // console.log(page);
  const pageData = page.items[0];

  return {
    props: {
      preview,
      contentfulPageData: pageData as unknown as IWebPage
    },
    revalidate: 10
  };
};

export default withPage(DynamicPage);

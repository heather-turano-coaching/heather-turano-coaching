import { GetContentfulPageProps, PageComponent } from "@htc/lib/page";
import {
  IWebPage,
  getAllContentfulPages,
  getContentfulPageBySlug
} from "@htc/lib/server/contentful";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { DynamicPage } from "src/features/dynamic";
import { ContentfulSeo } from "src/features/seo";

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
      fallback: true
    };
  };

export const getStaticProps: GetContentfulPageProps = async ({
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

const Page: PageComponent = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ContentfulSeo {...props} />
      <DynamicPage {...props} />
    </>
  );
};

Page.getPageLayout = DynamicPage.getPageLayout;

export default Page;

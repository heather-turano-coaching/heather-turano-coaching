import { LegalDocPage, LegalDocProps } from "@htc-website/features/legal";
import {
  getLegalDocBySlug,
  getLegalDocSlugs
} from "@htc-website/lib/server/lib.legal";
import markdownToHtml from "@htc-website/lib/server/lib.markdown-to-html";
import { withPage } from "@htc/components";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getLegalDocSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug
        }
      };
    }),
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<LegalDocProps> = async ({
  params
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const legalDoc = getLegalDocBySlug(params.slug, ["slug", "content", "title"]);
  const legalDocRoutes: LegalDocProps["legalDocRoutes"] =
    getLegalDocSlugs().map((slug) => {
      return {
        href: `/legal/${slug}`,
        title: slug.split("-").join(" ")
      };
    });
  const content = await markdownToHtml(legalDoc.content || "");

  return {
    props: {
      legalDoc: {
        ...legalDoc,
        slug: legalDoc.slug,
        content
      },
      legalDocRoutes
    }
  };
};

export default withPage(LegalDocPage);

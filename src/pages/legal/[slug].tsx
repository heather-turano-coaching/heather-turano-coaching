import { LegalDocPage, LegalDocProps } from "@htc/features/legal";
import { withPage } from "@htc/features/page";
import { getLegalDocBySlug, getLegalDocSlugs } from "@htc/lib/server/lib.legal";
import markdownToHtml from "@htc/lib/server/lib.markdown-to-html";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getLegalDocSlugs();

  return {
    paths: slugs.map((slug) => {
      console.log(slug);
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

import { LegalDocPage, LegalDocProps } from "@htc/features/legal";
import { withPage } from "@htc/features/page";
import { getAllLegalDocs, getLegalDocBySlug } from "@htc/lib/server/lib.legal";
import markdownToHtml from "@htc/lib/server/lib.markdown-to-html";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const legalDocs = getAllLegalDocs(["slug"]);

  return {
    paths: legalDocs.map((legalDoc) => {
      return {
        params: {
          slug: legalDoc.slug
        }
      };
    }),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<LegalDocProps> = async ({
  params
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const legalDoc = getLegalDocBySlug(params.slug, ["slug", "content"]);

  const content = await markdownToHtml(legalDoc.content || "");
  return {
    props: {
      legalDoc: {
        ...legalDoc,
        content
      }
    }
  };
};

export default withPage(LegalDocPage);

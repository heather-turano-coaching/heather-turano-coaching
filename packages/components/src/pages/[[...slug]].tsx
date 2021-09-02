import { GetStaticPaths, GetStaticProps } from "next";

import { withPage } from "../../lib";
import { DocsPageProps, HomePage } from "../features/docs-page";
import { getAllDocs, getDocBySlug, getDocNav } from "../utils-server";

export const getStaticPaths: GetStaticPaths<{ slug: string[] | undefined }> =
  async () => {
    const docs = getAllDocs();
    const paths = docs.map<{ params: { slug: string[] | undefined } }>(
      (doc) => ({
        params: {
          slug: doc.data.path
        }
      })
    );
    console.log(paths);

    return {
      paths,
      fallback: "blocking"
    };
  };

export const getStaticProps: GetStaticProps<DocsPageProps> = ({ params }) => {
  const doc = getDocBySlug(params?.slug as string[]);
  const docCategory = doc.data.path[0];
  const nav = getDocNav(docCategory);

  return {
    props: {
      nav,
      doc
    }
  };
};

export default withPage(HomePage);

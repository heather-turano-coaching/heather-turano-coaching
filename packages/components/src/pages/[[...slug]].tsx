import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";

import { withPage } from "../../lib";
import { DocsPage, DocsPageProps } from "../features/docs-page";
import { getAllDocs, getDocBySlug, getDocNav } from "../utils-server";

export const getStaticPaths: GetStaticPaths<{ slug: string[] | undefined }> =
  async () => {
    const docs = getAllDocs();
    const paths = docs.map<{ params: { slug: string[] | undefined } }>(
      (doc) => ({
        params: {
          slug:
            doc.data.path.length === 1 && doc.data.path[0] === "index"
              ? undefined
              : doc.data.path
        }
      })
    );
    console.log(paths);

    return {
      paths,
      fallback: "blocking"
    };
  };

export const getStaticProps: GetStaticProps<DocsPageProps> = async ({
  params
}) => {
  const doc = getDocBySlug(params?.slug as string[]);
  const docCategory = doc.data.path[0];
  const nav = getDocNav(docCategory);

  const mdxSource = await serialize(doc.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: doc.data
  });

  return {
    props: {
      nav,
      doc,
      source: mdxSource
    }
  };
};

export default withPage(DocsPage);

import { PageBlog } from "components/feature/blog";
import { Meta, MetaProps } from "components/feature/meta";
import { IPageBlog, contentfulClient } from "lib/contentful";
import { GetStaticProps } from "next";

export type BlogPageProps = MetaProps & {
  data: IPageBlog;
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "59srkQjfP5rxJfLwLe6nIZ"
  )) as IPageBlog;

  return {
    props: {
      pageTitle: "Blog",
      data
    }
  };
};

export default function BlogPage({ pageTitle, data }: BlogPageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageBlog {...data} />
    </>
  );
}

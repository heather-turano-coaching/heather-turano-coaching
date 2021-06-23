import { GetPageProps, PageComponent } from "@htc/lib/page";
import React from "react";
import { BlogPage, BlogPageProps, getBlogPageData } from "src/features/blog";
import { ContentfulSeo } from "src/features/seo";

export const getStaticProps: GetPageProps<BlogPageProps> = async () => {
  try {
    const props = await getBlogPageData();
    return {
      props
    };
  } catch (error) {
    throw new Error(error);
  }
};

const Page: PageComponent<BlogPageProps> = (props) => {
  return (
    <>
      <ContentfulSeo {...props} />
      <BlogPage {...props} />
    </>
  );
};

Page.getPageLayout = BlogPage.getPageLayout;

export default Page;

import {
  BlogPage,
  BlogPageProps,
  getBlogPageData
} from "@htc/components/feature/blog";
import { ContentfulSeo } from "@htc/components/feature/seo";
import { GetPageProps, PageComponent } from "@htc/lib/page";
import React from "react";

export const getStaticProps: GetPageProps<BlogPageProps> = async () => {
  const props = await getBlogPageData();

  return {
    props
  };
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

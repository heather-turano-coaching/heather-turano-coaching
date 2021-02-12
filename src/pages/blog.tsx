import {
  BlogPage,
  BlogPageProps,
  blogPageId,
  getBlogPageData
} from "@htc/components/feature/blog";
import { PageComponent } from "@htc/lib/page";
import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogData = await getBlogPageData();

  return {
    props: {
      pageId: blogPageId,
      ...blogData
    }
  };
};

const Page: PageComponent<BlogPageProps> = (props) => {
  return <BlogPage {...props} />;
};

Page.getPageLayout = BlogPage.getPageLayout;

export default Page;

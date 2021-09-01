import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
import React from "react";

import { BlogPageProps } from "./Blog.page";

export const withBlogPageLayout: WithPageLayout<BlogPageProps> = (
  PageComponent
) => {
  return function BlogPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

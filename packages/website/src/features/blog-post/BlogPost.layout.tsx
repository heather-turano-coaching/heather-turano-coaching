import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
import React from "react";

import { BlogPostPageProps } from "./BlogPost.page";

export const withBlogPostPageLayout: WithPageLayout<BlogPostPageProps> = (
  PageComponent
) => {
  return function BlogPostPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

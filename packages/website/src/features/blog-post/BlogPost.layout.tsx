import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
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

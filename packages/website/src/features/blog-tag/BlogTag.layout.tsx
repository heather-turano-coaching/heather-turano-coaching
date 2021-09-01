import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
import React from "react";

import { BlogTagPageProps } from "./BlogTag.page";

export const withBlogTagPageLayout: WithPageLayout<BlogTagPageProps> = (
  PageComponent
) => {
  return function BlogTagPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

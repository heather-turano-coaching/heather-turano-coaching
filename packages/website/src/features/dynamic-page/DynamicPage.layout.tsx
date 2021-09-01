import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
import React from "react";

import { DynamicPageProps } from "./DynamicPage";

export const withDynamicPagePageLayout: WithPageLayout<DynamicPageProps> = (
  PageComponent
) => {
  return function DynamicPagePageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

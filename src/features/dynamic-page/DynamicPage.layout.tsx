import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
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

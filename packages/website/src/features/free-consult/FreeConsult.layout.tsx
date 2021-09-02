import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc/components";
import React from "react";

export const withFreeConsultPageLayout: WithPageLayout = (PageComponent) => {
  return function FreeConsultPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

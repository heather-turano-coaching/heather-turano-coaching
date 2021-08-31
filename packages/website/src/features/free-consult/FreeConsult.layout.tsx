import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
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

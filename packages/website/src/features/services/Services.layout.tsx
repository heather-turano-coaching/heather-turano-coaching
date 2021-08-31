import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
import React from "react";

import { ServicesPageProps } from "./Services.page";

export const withServicesPageLayout: WithPageLayout<ServicesPageProps> = (
  PageComponent
) => {
  return function ServicesPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

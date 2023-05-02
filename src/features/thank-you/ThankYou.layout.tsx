import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
import React from "react";

import { ThankYouPageProps } from "./ThankYou.page";

export const withThankYouPageLayout: WithPageLayout<ThankYouPageProps> = (
  PageComponent
) => {
  return function ThankYouPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

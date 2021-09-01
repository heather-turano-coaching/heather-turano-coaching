import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
import React from "react";

export const withSubscriptionSuccessfulPageLayout: WithPageLayout = (
  PageComponent
) => {
  return function SubscriptionSuccessfulPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

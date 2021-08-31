import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
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

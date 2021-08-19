import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
import React from "react";

export const withSubscriptionActivatePageLayout: WithPageLayout = (
  PageComponent
) => {
  return function SubscriptionActivatePageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

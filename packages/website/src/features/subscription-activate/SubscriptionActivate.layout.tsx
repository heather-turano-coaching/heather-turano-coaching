import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
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

import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc-website/features/page";
import React from "react";

export const withSignInPageLayout: WithPageLayout = (PageComponent) => {
  return function SignInPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

// import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc/components";
import React from "react";

export const withAdminPageLayout: WithPageLayout = (PageComponent) => {
  return function AdminPageLayout(props) {
    return (
      <div>
        admin layout here
        <hr />
        <PageComponent {...props} />
      </div>
    );
  };
};

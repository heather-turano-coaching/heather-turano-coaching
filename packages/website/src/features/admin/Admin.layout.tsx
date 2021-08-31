// import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
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

import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
import React from "react";

import { LinksPageProps } from "./Links.page";

export const withLinksPageLayout: WithPageLayout<LinksPageProps> = (
  PageComponent
) => {
  return function LinksPageLayout(props) {
    return (
      <LayoutRoot {...props} hideNavBar>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

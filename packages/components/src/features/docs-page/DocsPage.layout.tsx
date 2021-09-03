import React from "react";

import { WithPageLayout } from "../../../lib";
import { LayoutRoot } from "../layout";
import type { DocsPageProps } from "./DocsPage.page";

export const withDocsPageLayout: WithPageLayout<DocsPageProps> = (
  PageComponent
) => {
  return function DocsPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

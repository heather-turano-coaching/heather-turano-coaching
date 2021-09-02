import React from "react";

import { WithPageLayout } from "../../../lib";
import { LayoutRoot } from "../layout";
import { ComponentDocsPageProps } from "./ComponentDocs.page";

export const withComponentDocsPageLayout: WithPageLayout<ComponentDocsPageProps> =
  (PageComponent) => {
    return function DynamicPagePageLayout(props) {
      return (
        <LayoutRoot {...props}>
          <PageComponent {...props} />
        </LayoutRoot>
      );
    };
  };

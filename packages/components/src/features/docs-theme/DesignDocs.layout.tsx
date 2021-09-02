import React from "react";

import { WithPageLayout } from "../../../lib";
import { LayoutRoot } from "../layout";
import { DesignDocsPageProps } from "./DesignDocs.page";

export const withDesignDocsPageLayout: WithPageLayout<DesignDocsPageProps> = (
  PageComponent
) => {
  return function DynamicPagePageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

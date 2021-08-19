import { LayoutRoot } from "@htc/features/layout";
import { PageLayout } from "@htc/features/page";
import React from "react";

import { withPageLayout } from "../page/page.withPageLayout";

export const LegalPageLayout: PageLayout = ({ children, ...props }) => {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
};

export const withLegalPageLayout = withPageLayout(LegalPageLayout);

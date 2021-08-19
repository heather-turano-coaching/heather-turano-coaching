import { PageLayout, withPageLayout } from "@htc/features/page";
import React from "react";

import { LegalPageLayout } from "./Legal.layout";
import { LegalDocProps } from "./LegalDoc.page";

const LegalDocPageLayout: PageLayout<LegalDocProps> = ({
  children,
  ...props
}) => {
  return (
    <LegalPageLayout preview={props.preview}>
      <div> nested layout</div>
      {children}
    </LegalPageLayout>
  );
};

export const withLegalDocPageLayout = withPageLayout(LegalDocPageLayout);

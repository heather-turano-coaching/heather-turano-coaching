import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
import React from "react";

import { PromotionPageProps } from "./Promotion.page";

export const withPromotionPageLayout: WithPageLayout<PromotionPageProps> = (
  PageComponent
) => {
  return function PromotionPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};

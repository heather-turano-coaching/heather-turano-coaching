import { LayoutRoot } from "@htc/features/layout";
import { WithPageLayout } from "@htc/features/page";
import React from "react";

import { PromotionPageThankYouProps } from "./PromotionThankYou.page";

export const withPromotionPageThankYouLayout: WithPageLayout<PromotionPageThankYouProps> =
  (PageComponent) => {
    return function PromotionPageThankYouLayout(props) {
      return (
        <LayoutRoot {...props}>
          <PageComponent {...props} />
        </LayoutRoot>
      );
    };
  };

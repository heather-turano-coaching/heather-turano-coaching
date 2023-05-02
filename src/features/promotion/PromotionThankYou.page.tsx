import { FeaturePageComponent } from "@htc/features/page";
import { useRouter } from "next/router";
import React from "react";

import { withPromotionPageThankYouLayout } from "./PromotionThankYou.layout";
import { IPromotion } from "@htc/lib/contentful/contentful.types";
import { ThankYou } from "../thank-you/ThankYou";
import { ContentfulRichText } from "@htc/components/atomic";

export type PromotionPageThankYouProps = {
  promotion: IPromotion;
};

export const PromotionPageThankYou: FeaturePageComponent<PromotionPageThankYouProps> =
  ({ promotion }) => {
    const router = useRouter();

    if (router.isFallback) {
      return <div>Loading...</div>;
    }

    return (
      <ThankYou title={promotion.fields.thankYouTitle}>
        <ContentfulRichText
          richText={promotion.fields.thankYouDescription}
          copyProps={{
            variant: "paragraph"
          }}
        />
      </ThankYou>
    );
  };

PromotionPageThankYou.withPageLayout = withPromotionPageThankYouLayout;

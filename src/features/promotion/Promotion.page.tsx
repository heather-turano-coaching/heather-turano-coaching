import { FeaturePageComponent } from "@htc/features/page";
import { useRouter } from "next/router";
import React from "react";

import { withPromotionPageLayout } from "./Promotion.layout";
import { IPromotion } from "@htc/lib/contentful/contentful.types";

export type PromotionPageProps = {
  promotion: IPromotion;
};

export const PromotionPage: FeaturePageComponent<PromotionPageProps> = ({
  promotion
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <form method="POST" action={promotion.fields.audiencefulPostActionUrl}>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="youremail@yourdomain.com"
        required
      />
    </form>
  );
};

PromotionPage.withPageLayout = withPromotionPageLayout;

import { BlockSimplePlain } from "@htc-website/components";
import { FeaturePageComponent } from "@htc-website/features/page";
import { Button } from "@htc/components";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

import { withSubscriptionSuccessfulPageLayout } from "./SubscriptionSuccessful.layout";

export const SubscriptionSuccessful: FeaturePageComponent = () => {
  return (
    <>
      <NextSeo
        nofollow
        noindex
        title="Subscriptiong Activated!"
        description="You have successfully signed up for email services. Yasss!"
      />
      <BlockSimplePlain
        title="Yassss! You're all signed up!"
        type="plain"
        footer={
          <Link href="/" passHref>
            <Button styleType="primary">Back to Home Page</Button>
          </Link>
        }
      >
        <div>
          Congrats! You&apos;re now signed up to recieve email updates from
          Heather Turano Coaching!
        </div>
      </BlockSimplePlain>
    </>
  );
};

SubscriptionSuccessful.withPageLayout = withSubscriptionSuccessfulPageLayout;

import { BlockSimplePlain } from "@htc-website/components/content/blocks/BlockSimple";
import { FeaturePageComponent } from "@htc-website/features/page";
import { NextSeo } from "next-seo";
import React from "react";

import { withSubscriptionActivatePageLayout } from "./SubscriptionActivate.layout";

export const SubscriptionActivate: FeaturePageComponent = () => {
  return (
    <>
      <NextSeo
        nofollow
        noindex
        title="Activate your subscription"
        description="Finish the sign up process by activating your subscription!"
      />
      <BlockSimplePlain
        title="You're Almost Done - Activate Your Subscription!"
        type="stacked"
      >
        <div>
          You&apos;ve just been sent an email that contains a{" "}
          <strong>confirmation link.</strong>
        </div>
        <br />
        <div>
          In order to activate your subscription, check your email and click on
          the link in that email. You will not receive your subscription until
          you click that link to activate it.
        </div>
        <br />
        <div>
          If you don&apos;t see that email in your inbox within 12 hours, please
          reach out to <strong>support@heatherturanocoaching.com</strong>
        </div>
      </BlockSimplePlain>
    </>
  );
};

SubscriptionActivate.withPageLayout = withSubscriptionActivatePageLayout;

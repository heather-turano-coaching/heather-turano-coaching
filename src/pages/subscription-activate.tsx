import { PageComponent } from "@htc/lib/page";
import { NextSeo } from "next-seo";
import React from "react";
import { SubscriptionActivate } from "src/features/subscription";

const Page: PageComponent = (props) => {
  return (
    <>
      <NextSeo
        nofollow
        noindex
        title="Activate your subscription"
        description="Finish the sign up process by activating your subscription!"
      />
      <SubscriptionActivate {...props} />
    </>
  );
};

Page.getPageLayout = SubscriptionActivate.getPageLayout;

export default Page;

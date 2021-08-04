import { PageComponent } from "@htc/lib/page";
import { NextSeo } from "next-seo";
import React from "react";
import { SubscriptionSuccessful } from "src/features/subscription";

const Page: PageComponent = (props) => {
  return (
    <>
      <NextSeo
        nofollow
        noindex
        title="Subscriptiong Activated!"
        description="You have successfully signed up for email services. Yasss!"
      />
      <SubscriptionSuccessful {...props} />
    </>
  );
};

Page.getPageLayout = SubscriptionSuccessful.getPageLayout;

export default Page;

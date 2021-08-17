import { BlockSimplePlain } from "@htc/components/content";
import { FeaturePageComponent } from "@htc/features/page";
import { NextSeo } from "next-seo";
import React from "react";

import { withSignInPageLayout } from "./SignIn.layout";

export const SignInPage: FeaturePageComponent = () => {
  return (
    <>
      <NextSeo
        title="Admin - Sign in"
        description="Sign in as an administrator"
      />
      <BlockSimplePlain title="Administrative Login" type="plain">
        Please click on the button below to sign into the administrative
        console.
      </BlockSimplePlain>
    </>
  );
};

SignInPage.withPageLayout = withSignInPageLayout;

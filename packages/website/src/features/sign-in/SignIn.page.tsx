import { BlockSimplePlain } from "@htc-website/components";
import { FeaturePageComponent } from "@htc/components";
import { Button } from "@htc/components";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import { css } from "styled-components";

import { withSignInPageLayout } from "./SignIn.layout";

export const SignInPage: FeaturePageComponent = () => {
  return (
    <>
      <NextSeo
        title="Admin - Sign in"
        description="Sign in as an administrator"
      />
      <BlockSimplePlain title="Administrative Login" type="plain">
        <div
          css={css`
            text-align: center;
          `}
        >
          <div>
            Please click on the button below to sign into the administrative
            console.
          </div>
          <br />
          <br />
          <Link href="/api/auth/login?returnTo=/admin" passHref>
            <Button component="a" variant="outlined" color="primary">
              Sign in
            </Button>
          </Link>
        </div>
      </BlockSimplePlain>
    </>
  );
};

SignInPage.withPageLayout = withSignInPageLayout;

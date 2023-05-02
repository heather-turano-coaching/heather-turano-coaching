/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FeaturePageComponent } from "@htc/features/page";
import React from "react";

import { ThankYou } from "./ThankYou";
import { withThankYouPageLayout } from "./ThankYou.layout";
import { Typography } from "@htc/components/atomic";

export type ThankYouPageProps = Record<string, unknown>;

export const ThankYouPage: FeaturePageComponent<ThankYouPageProps> = () => {
  return (
    <ThankYou title="Welcome to the community!">
      <Typography
        variant="paragraph"
        // @ts-ignore
        as="p"
      >
        Thank you for signing up to Heather Turano Coaching&apos;s newsletter,
        where we provide exclusive tips and resources for high achievers like
        you!
      </Typography>
      <Typography
        variant="paragraph"
        // @ts-ignore
        as="p"
      >
        Stay tuned for our upcoming newsletters and updates, as we&apos;re
        committed to helping you reach your full potential through our coaching
        services.
      </Typography>
      <Typography
        variant="paragraph"
        // @ts-ignore
        as="p"
      >
        Thank you for being a part of our community!
      </Typography>
    </ThankYou>
  );
};

ThankYouPage.withPageLayout = withThankYouPageLayout;

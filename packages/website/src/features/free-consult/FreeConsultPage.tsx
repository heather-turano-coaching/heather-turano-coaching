import { makeRem } from "@htc-website/components";
/* eslint-disable @next/next/no-sync-scripts */
import { FeaturePageComponent } from "@htc-website/features/page";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import { css } from "styled-components";

import { withFreeConsultPageLayout } from "./FreeConsult.layout";

export const FreeConsultPage: FeaturePageComponent = () => {
  return (
    <>
      <NextSeo
        title="Free 30-Minute Consultation"
        description="Sign up for a free 30 minute consultation to understand and learn how Heather can help you."
      />
      <div
        css={css`
          height: ${makeRem(1000)};

          .calendly-inline-widget {
            height: 100% !important;
          }
        `}
      >
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/heather-turano-coaching/30-minute-introductory-consult?text_color=4a4a4a&primary_color=4e8588"
          style={{
            minWidth: 320,
            height: 630
          }}
        />
        <Head>
          <script src="https://assets.calendly.com/assets/external/widget.js" />
        </Head>
      </div>
    </>
  );
};

FreeConsultPage.withPageLayout = withFreeConsultPageLayout;

import { FeaturePageComponent } from "@htc/features/page";
import { makeRem } from "@htc/theme";
import { NextSeo } from "next-seo";
import React from "react";
import styled from "styled-components";

import { withFreeConsultPageLayout } from "./FreeConsult.layout";
import Script from "next/script";

const SDiv = styled("div")`
  height: ${makeRem(1000)};

  .calendly-inline-widget {
    height: 100% !important;
  }
`;

export const FreeConsultPage: FeaturePageComponent = () => {
  return (
    <>
      <NextSeo
        title="Free 30-Minute Consultation"
        description="Sign up for a free 30 minute consultation to understand and learn how Heather can help you."
      />
      <SDiv>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/heather-turano-coaching/30-minute-introductory-consult?text_color=4a4a4a&primary_color=4e8588"
          style={{
            minWidth: 320,
            height: 630
          }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" />
      </SDiv>
    </>
  );
};

FreeConsultPage.withPageLayout = withFreeConsultPageLayout;

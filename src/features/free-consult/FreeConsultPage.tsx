import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import Head from "next/head";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";

export const FreeConsultPage: PageComponent = () => {
  return (
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
  );
};

FreeConsultPage.getPageLayout = function getPageLayout(page, { preview }) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};

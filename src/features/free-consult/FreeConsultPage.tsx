import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
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
      dangerouslySetInnerHTML={{
        __html: `<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/heather-turano-coaching/30-minute-introductory-consult?text_color=4a4a4a&primary_color=4e8588" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
<!-- Calendly inline widget end -->`
      }}
    />
  );
};

FreeConsultPage.getPageLayout = function getPageLayout(page, { preview }) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};

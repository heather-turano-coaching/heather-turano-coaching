import { Blocks, Hero } from "@htc/components/content";
import { PageComponent } from "@htc/lib/page";
import React from "react";

import { LayoutRoot } from "../layout";

export const DynamicPage: PageComponent = ({ contentfulPageData }) => {
  const {
    fields: {
      hero: { fields: heroFields },
      blocks
    }
  } = contentfulPageData;

  return (
    <>
      <Hero {...heroFields} />
      <Blocks blocks={blocks} />
    </>
  );
};

DynamicPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

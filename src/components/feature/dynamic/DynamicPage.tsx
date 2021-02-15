import { Blocks, Hero } from "@htc/components/content";
import { PageComponent } from "@htc/lib/page";
import React from "react";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

export const DynamicPage: PageComponent = ({ contentfulPageData }) => {
  const {
    fields: {
      navbarLabel,
      hero: { fields: heroFields },
      blocks
    }
  } = contentfulPageData;

  return (
    <>
      <Meta pageTitle={navbarLabel} />
      <Hero {...heroFields} />
      <Blocks blocks={blocks} />
    </>
  );
};

DynamicPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

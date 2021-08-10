import { Blocks, Hero } from "@htc/components/content";
import { PageComponent } from "@htc/lib/page";
import React from "react";

import { LayoutRoot } from "../layout";

export const DynamicPage: PageComponent = ({ contentfulPageData }) => {
  const {
    fields: { hero, blocks }
  } = contentfulPageData;

  return (
    <>
      {hero && <Hero {...hero.fields} />}
      <Blocks blocks={blocks} />
    </>
  );
};

DynamicPage.getPageLayout = function getPageLayout(page, { preview }) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};

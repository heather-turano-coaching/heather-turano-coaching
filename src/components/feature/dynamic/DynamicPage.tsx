import { Blocks, Hero } from "@htc/components/content";
import { IWebPage } from "@htc/lib/contentful";
import { getContentfulEntryById } from "@htc/lib/contentful";
import { PageComponent } from "@htc/lib/page";
import React from "react";
import useSWR from "swr";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

export type DynamicPageProps = {
  data: IWebPage;
};

export const DynamicPage: PageComponent = ({
  contentfulPageEntryId,
  contentfulPageData
}) => {
  const { data } = useSWR<IWebPage>(contentfulPageEntryId, {
    initialData: contentfulPageData,
    fetcher: async (pageId) => getContentfulEntryById<IWebPage>(pageId)
  });

  if (!data) {
    return null;
  }

  const {
    fields: {
      navbarLabel,
      hero: { fields: heroFields },
      blocks
    }
  } = data;

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

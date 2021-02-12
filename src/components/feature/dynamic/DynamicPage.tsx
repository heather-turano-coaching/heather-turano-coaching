import { IWebPage } from "@htc/domain/contentful";
import { getEntryById } from "@htc/lib/contentful";
import { PageComponent } from "@htc/lib/page";
import { Blocks } from "components/content/blocks";
import { Hero } from "components/content/heros";
import React from "react";
import useSWR from "swr";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

export type DynamicPageProps = {
  pageId: string;
  data: IWebPage;
};

export const DynamicPage: PageComponent<DynamicPageProps> = ({
  pageId,
  data
}) => {
  const {
    data: {
      fields: {
        navbarLabel,
        hero: { fields: heroFields },
        blocks
      }
    }
  } = useSWR<IWebPage>(pageId, {
    initialData: data,
    fetcher: async (pageId) => getEntryById<IWebPage>(pageId)
  });

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

import { Hero } from "components/content/heros";
import { IWebPage, getEntryById } from "lib/contentful";
import { PageComponent } from "lib/page";
import React from "react";
import useSWR from "swr";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

export type ServicesPageProps = {
  pageId: string;
  data: IWebPage;
};

export const ServicesPage: PageComponent<ServicesPageProps> = ({
  pageId,
  data
}) => {
  const {
    data: {
      fields: {
        hero: { fields: heroFields }
      }
    }
  } = useSWR(`/${pageId}`, async () => getEntryById<IWebPage>(pageId), {
    initialData: data
  });
  return (
    <>
      <Meta pageTitle="Services" />
      <Hero {...heroFields} hideGradient />
    </>
  );
};

ServicesPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

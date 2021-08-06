import { PageComponent } from "@htc/lib/page";
import { NextSeo } from "next-seo";
import React from "react";
import { LinksPage } from "src/features/links";

const Page: PageComponent = (props) => {
  return (
    <>
      <NextSeo
        title="Links"
        description="A collection of amazing links aunchpad to Heather Turano Coaching's latest video, article, recipe, tour, store, website, social post."
        nofollow
        noindex
      />

      <LinksPage {...props} />
    </>
  );
};

Page.getPageLayout = LinksPage.getPageLayout;

export default Page;

import { Blocks, Hero } from "@htc-website/components/content";
import {
  ContentfulPageProps,
  FeaturePageComponent
} from "@htc-website/features/page";
import { ContentfulSeo } from "@htc-website/features/seo";
import { useRouter } from "next/router";
import React from "react";

import { withDynamicPagePageLayout } from "./DynamicPage.layout";

export type DynamicPageProps = ContentfulPageProps;

export const DynamicPage: FeaturePageComponent<DynamicPageProps> = ({
  contentfulPageData
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const {
    fields: { hero, blocks }
  } = contentfulPageData;

  return (
    <>
      <ContentfulSeo contentfulPageData={contentfulPageData} />
      {hero && <Hero {...hero.fields} />}
      <Blocks blocks={blocks} />
    </>
  );
};

DynamicPage.withPageLayout = withDynamicPagePageLayout;

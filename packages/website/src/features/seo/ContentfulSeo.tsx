import { ContentfulPageData } from "@htc-website/features/page";
import { capitalize } from "@htc-website/utils";
import { NextSeo } from "next-seo";
import { FC } from "react";

export const ContentfulSeo: FC<ContentfulPageData> = ({
  contentfulPageData: {
    fields: { seo }
  }
}) => {
  return (
    <NextSeo
      title={capitalize(seo.fields.title)}
      description={seo.fields.description}
    />
  );
};

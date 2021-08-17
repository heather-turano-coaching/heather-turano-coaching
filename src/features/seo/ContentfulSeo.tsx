import { ContentfulPageData } from "@htc/features/page";
import { capitalize } from "@htc/utils";
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

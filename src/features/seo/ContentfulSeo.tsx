import { ContentfulPageAttributes } from "@htc/lib/page";
import { capitalize } from "@htc/utils";
import { NextSeo } from "next-seo";
import { FC } from "react";

export const ContentfulSeo: FC<ContentfulPageAttributes> = ({
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

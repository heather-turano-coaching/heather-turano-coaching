import { Image } from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import { FC, memo } from "react";
import React from "react";

export const Hero: FC = memo(() => {
  const { contentful100Days: queryData } = useStaticQuery<{
    contentful100Days: { heroImage: { file: { url: string } } };
  }>(graphql`
    {
      contentful100Days {
        heroImage {
          file {
            url
          }
        }
      }
    }
  `);
  return (
    <Image src={queryData.heroImage.file.url} alt="hero" manualWidth="100%" />
  );
});

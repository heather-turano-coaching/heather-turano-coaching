import { Image } from "@heather-turano-coaching/core/components";
import { graphql, useStaticQuery } from "gatsby";
import { FC, memo } from "react";
import React from "react";

export const Hero: FC = memo(() => {
  const {
    contentfulPageHome: {
      heroImage: {
        file: { url }
      }
    }
  } = useStaticQuery<{
    contentfulPageHome: { heroImage: { file: { url: string } } };
  }>(graphql`
    {
      contentfulPageHome {
        heroImage {
          file {
            url
          }
        }
      }
    }
  `);
  return <Image src={url} alt="hero" manualWidth="100%" />;
});

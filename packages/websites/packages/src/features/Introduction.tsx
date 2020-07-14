import {} from "graphql";

import {
  ContentfulRichText,
  Heading,
  Section,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

export const Introduction: FC = () => {
  const { contentfulPageHome } = useStaticQuery<{
    contentfulPageHome: {
      introductionTitle: string;
      introductionDescription: { json: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        introductionTitle
        introductionDescription {
          json
        }
      }
    }
  `);

  return (
    <Section styleType="blank">
      <Heading fontSize="h1" fontFamily="Playfair Display">
        {contentfulPageHome.introductionTitle}
      </Heading>
      <br />
      <ContentfulRichText
        richText={contentfulPageHome.introductionDescription.json}
        copyProps={{
          variant: "paragraph",
          fontSize: "sm",
        }}
      />
    </Section>
  );
};

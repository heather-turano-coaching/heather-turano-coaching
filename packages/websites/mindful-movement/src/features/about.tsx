import {
  ContentfulRichText,
  Heading,
  Section,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import { FC } from "react";
import React from "react";

export const About: FC = () => {
  const { contentfulPageHome } = useStaticQuery<{
    contentfulPageHome: {
      aboutTitle: string;
      aboutDescription: { json: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        aboutTitle
        aboutDescription {
          json
        }
      }
    }
  `);

  return (
    <Section
      styleType="blank"
      background={{ scalable: { color: "secondary", scale: 0 } }}
    >
      <Heading
        fontSize="h1"
        fontFamily="Playfair Display"
        fontColor={{ fixed: "light" }}
      >
        {contentfulPageHome.aboutTitle}
      </Heading>
      <br />
      <ContentfulRichText
        richText={contentfulPageHome.aboutDescription.json}
        copyProps={{
          variant: "paragraph",
          fontColor: { fixed: "light" },
          fontSize: "sm",
        }}
      />
    </Section>
  );
};

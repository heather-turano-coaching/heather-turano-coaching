import {
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import { FC } from "react";
import React from "react";

export const About: FC = () => {
  const { contentfulPageHome } = useStaticQuery<{
    contentfulPageHome: {
      aboutTitle: string;
      aboutDescription: { aboutDescription: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        aboutTitle
        aboutDescription {
          aboutDescription
        }
      }
    }
  `);

  return (
    <>
      <div id="#about"></div>
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
        <Typography
          variant="label"
          fontSize="md"
          fontColor={{ fixed: "light" }}
        >
          {contentfulPageHome.aboutDescription.aboutDescription}
        </Typography>
      </Section>
    </>
  );
};

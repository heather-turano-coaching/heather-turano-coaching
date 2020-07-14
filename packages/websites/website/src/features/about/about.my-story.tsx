import {
  Section,
  SectionCopy,
  Title,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { ContentfulRichText } from "../../components";

export const AboutMyStory: FC = () => {
  const { contentfulPageAbout: queryData } = useStaticQuery(graphql`
    {
      contentfulPageAbout {
        myStoryTitle
        myStoryDescription {
          json
        }
      }
    }
  `);

  return (
    <>
      <Section styleType="layered">
        <Title size="lg">{queryData.myStoryTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            richText={queryData.myStoryDescription.json}
            copy={{ fontSize: "md", variant: "paragraph" }}
          />
        </SectionCopy>
      </Section>
    </>
  );
};

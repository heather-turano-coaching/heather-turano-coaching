import {
  Section,
  SectionCopy,
  Title,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { ContentfulRichText } from "../../components";

export const AboutMyStyle: FC = () => {
  const { contentfulPageAbout: queryData } = useStaticQuery(graphql`
    {
      contentfulPageAbout {
        myStyleTitle
        myStyleDescription {
          json
        }
      }
    }
  `);

  return (
    <>
      <Section styleType="blank">
        <Title size="lg">{queryData.myStyleTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            richText={queryData.myStyleDescription.json}
            copy={{ fontSize: "md", variant: "paragraph" }}
          />
        </SectionCopy>
      </Section>
    </>
  );
};

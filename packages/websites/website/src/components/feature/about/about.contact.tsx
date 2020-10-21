import {
  ContentfulRichText,
  Section,
  SectionCopy,
  SectionFooter,
  Title,
  Typography
} from "@heather-turano-coaching/core/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { FormQuickContact } from "../forms/FormQuickContact";

export const AboutContact = () => {
  const { contentfulPageAbout: queryData } = useStaticQuery(graphql`
    {
      contentfulPageAbout {
        contactTitle
        contactDescription {
          json
        }
        contactFormSubmitLabel
      }
    }
  `);

  return (
    <Section styleType="layered">
      <Title size="lg">{queryData.contactTitle}</Title>
      <SectionCopy>
        <Typography fontSize="md" variant="text">
          <ContentfulRichText
            richText={queryData.contactDescription.json}
            copyProps={{ fontSize: "md", variant: "paragraph" }}
          />
        </Typography>
      </SectionCopy>
      <SectionFooter>
        <div style={{ maxWidth: "80%", margin: "0 auto" }}>
          <FormQuickContact
            submitButtonLabel={queryData.contactFormSubmitLabel}
            submitButtonColor="secondary"
          />
        </div>
      </SectionFooter>
    </Section>
  );
};

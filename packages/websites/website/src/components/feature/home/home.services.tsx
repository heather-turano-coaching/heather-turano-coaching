import {
  Button,
  ButtonGroup,
  Section,
  SectionCopy,
  SectionFooter,
  Title,
  Typography
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

// @ts-ignore
export const HomeServices = () => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        servicesTitle
        servicesDescription {
          servicesDescription
        }
        servicesLinkText
        servicesLinkUrl
      }
    }
  `);

  return (
    <Section styleType="layered">
      <Title size="lg">{queryData.servicesTitle}</Title>
      <SectionCopy>
        <Typography fontSize="md" variant="text">
          {queryData.servicesDescription.servicesDescription}
        </Typography>
        <SectionFooter>
          <ButtonGroup layout="inline" align="center">
            <Button label={queryData.servicesLinkText} styleType="primary" />
          </ButtonGroup>
        </SectionFooter>
      </SectionCopy>
    </Section>
  );
};

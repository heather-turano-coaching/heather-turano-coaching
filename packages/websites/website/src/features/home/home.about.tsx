import {
  Button,
  ButtonGroup,
  Section,
  SectionCopy,
  SectionFooter,
  Title,
  Typography,
} from "@heather-turano-coaching/components";
import { makeColor } from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const HomeAbout = () => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        aboutTitle
        aboutDescription {
          content {
            content {
              value
            }
          }
        }
        aboutLearnMoreLinkUrl
        aboutLearnMoreLinkText
        aboutGoToServicesLinkUrl
        aboutGoToServicesLinkText
      }
    }
  `);

  return (
    <div style={{ background: makeColor({ fixed: "light" }) }}>
      <Section styleType="blank">
        <Title size="lg">{queryData.aboutTitle}</Title>
        <SectionCopy>
          <Typography fontSize="md" variant="text">
            {queryData.aboutDescription.content[0].content[0].value}
          </Typography>
        </SectionCopy>
        <SectionFooter>
          <ButtonGroup layout="inline" align="center">
            <Button
              label={queryData.aboutLearnMoreLinkText}
              styleType="primary"
            />
            <Button
              label={queryData.aboutGoToServicesLinkText}
              styleType="secondary"
            />
          </ButtonGroup>
        </SectionFooter>
      </Section>
    </div>
  );
};

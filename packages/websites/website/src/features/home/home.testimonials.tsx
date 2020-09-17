import {
  Button,
  ButtonGroup,
  ContentfulRichText,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSplitPane,
  Title
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { TestimonialCarousel } from "../../features";

export const HomeTestimonials: FC = () => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        testimonialsTitle
        testimonialsDescription {
          testimonialsDescription
        }
        testimonialsCtaLabel
        testimonialsCtaUrl
        testimonialsListOfTestimonials {
          customerDescription
          customerLocation
          image {
            file {
              url
            }
          }
          maskingOpacity
          testimonialDescription {
            testimonialDescription
          }
        }
      }
    }
  `);

  return (
    <Section styleType="split">
      <SectionSplitPane background={{ fixed: "light" }}>
        <Title size="lg">{queryData.testimonialsTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            copyProps={{
              fontSize: "md",
              variant: "text"
            }}
            richText={queryData.testimonialsDescription.testimonialsDescription}
          />
        </SectionCopy>
        <SectionFooter>
          <ButtonGroup layout="inline" align="center">
            <Button
              styleType="secondary"
              label={queryData.testimonialsCtaLabel}
            />
          </ButtonGroup>
        </SectionFooter>
      </SectionSplitPane>
      <SectionSplitPane
        background={{ scalable: { color: "gray", scale: 0 } }}
        spaceType="flush"
      >
        <TestimonialCarousel
          testimonials={queryData.testimonialsListOfTestimonials}
        />
      </SectionSplitPane>
    </Section>
  );
};

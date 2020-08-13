import {
  Button,
  ButtonGroup,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSplitPane,
  Title
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { ContentfulRichText } from "../../components";
import { TestimonialCarousel } from "../../features";

export const HomeTestimonials = () => {
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
            copy={{
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

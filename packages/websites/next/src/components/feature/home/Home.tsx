import {
  Button,
  ButtonGroup,
  ContentfulRichText,
  Heading,
  Hero,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSplitPane,
  Title,
  Typography
} from "@heather-turano-coaching/components";
import { makeColor, makeOutset } from "@heather-turano-coaching/design-system";
import { TestimonialCarousel } from "components/content/testimonials";
import { IPageHome } from "lib/contentful";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { FormQuickContact } from "../forms/FormQuickContact";

const StyledHeading = styled.div`
  h1 {
    line-height: 1.1;
    text-transform: uppercase;
    font-weight: 500;
  }

  h4 {
    ${makeOutset({ top: "xxs", bottom: "md" })};
    max-width: 50%;
  }
`;

export const PageHome: FC<IPageHome> = ({ fields }) => {
  return (
    <>
      <Hero
        image={fields.heroImage.fields.file.url}
        alt={fields.heroImage.fields.title.split(" ").join("")}
        borderColor={{ fixed: "light" }}
        gradient={{ scalable: { color: "secondary" } }}
      >
        <Section styleType="hero">
          <StyledHeading>
            <Heading
              fontSize="h1"
              fontColor={{ fixed: "light" }}
              fontFamily="Montserrat"
            >
              {fields.heroTitle.split(" ").map((word: string) => (
                <div key={word}>{word}</div>
              ))}
            </Heading>
            <Heading
              fontSize="h4"
              fontColor={{ fixed: "light" }}
              fontFamily="Muli"
            >
              {fields.heroSubTitle}
            </Heading>
            <Button label={fields.heroCtaButtonLabel} />
          </StyledHeading>
        </Section>
      </Hero>

      {/* About Section */}
      <div
        css={css`
          background: ${makeColor({ fixed: "light" })};
        `}
      >
        <Section styleType="blank">
          <Title size="lg">{fields.aboutTitle}</Title>
          <SectionCopy>
            <ContentfulRichText
              copyProps={{
                variant: "text",
                fontSize: "md"
              }}
              richText={fields.aboutDescription}
            />
          </SectionCopy>
          <SectionFooter>
            <ButtonGroup layout="inline" align="center">
              <Button
                label={fields.aboutLearnMoreLinkText}
                styleType="primary"
              />
              <Button
                label={fields.aboutGoToServicesLinkText}
                styleType="secondary"
              />
            </ButtonGroup>
          </SectionFooter>
        </Section>
      </div>

      {/* Services */}
      <Section styleType="layered">
        <Title size="lg">{fields.servicesTitle}</Title>
        <SectionCopy>
          <Typography fontSize="md" variant="text">
            {fields.servicesDescription}
          </Typography>
          <SectionFooter>
            <ButtonGroup layout="inline" align="center">
              <Button label={fields.servicesLinkText} styleType="primary" />
            </ButtonGroup>
          </SectionFooter>
        </SectionCopy>
      </Section>

      {/* Testimonials */}
      <Section styleType="split">
        <SectionSplitPane background={{ fixed: "light" }}>
          <Title size="lg">{fields.testimonialsTitle}</Title>
          <SectionCopy>
            <ContentfulRichText
              copyProps={{
                fontSize: "md",
                variant: "text"
              }}
              richText={fields.testimonialsDescription}
            />
          </SectionCopy>
          <SectionFooter>
            <ButtonGroup layout="inline" align="center">
              <Button
                styleType="secondary"
                label={fields.testimonialsCtaLabel}
              />
            </ButtonGroup>
          </SectionFooter>
        </SectionSplitPane>
        <SectionSplitPane
          background={{ scalable: { color: "gray", scale: 0 } }}
          spaceType="flush"
        >
          <TestimonialCarousel
            testimonials={fields.testimonialsListOfTestimonials}
          />
        </SectionSplitPane>
      </Section>

      {/* Contact */}
      <Section styleType="layered">
        <Title size="lg">{fields.contactTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            copyProps={{
              fontSize: "md",
              variant: "text"
            }}
            richText={fields.contactDescription}
          />
        </SectionCopy>
        <SectionFooter>
          <div style={{ maxWidth: "80%", margin: "0 auto" }}>
            <FormQuickContact
              submitButtonLabel={fields.contactFormButtonLabel}
              submitButtonColor="secondary"
            />
          </div>
        </SectionFooter>
      </Section>
    </>
  );
};

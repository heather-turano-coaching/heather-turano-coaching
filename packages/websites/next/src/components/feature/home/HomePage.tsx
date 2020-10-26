import {
  Button,
  ButtonGroup,
  ContentfulRichText,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSplitPane,
  Title,
  Typography
} from "@heather-turano-coaching/core/components";
import { makeColor } from "@heather-turano-coaching/core/design-system";
import { HeroImage } from "components/content/heros";
import { TestimonialCarousel } from "components/content/testimonials";
import { IPageHome } from "lib/contentful";
import { PageComponent } from "lib/page";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";

export type HomePageProps = {
  data: IPageHome;
};

export const HomePage: PageComponent<HomePageProps> = ({
  data: { fields }
}) => {
  return (
    <>
      <HeroImage
        title={fields.heroTitle}
        subTitle={fields.heroSubTitle}
        img={fields.heroImage.fields.file.url}
        imgAlt={fields.heroImage.fields.title.split(" ").join("")}
      />

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
            <div>Aweber placeholder</div>
          </div>
        </SectionFooter>
      </Section>
    </>
  );
};

HomePage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

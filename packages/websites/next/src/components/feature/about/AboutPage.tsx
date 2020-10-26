import {
  Button,
  ContentfulRichText,
  Image,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSpacer,
  Title
} from "@heather-turano-coaching/core/components";
import {
  makeInset,
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/core/design-system";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { makeFlex } from "@heather-turano-coaching/core/theme";
import { HeroOffsetVertical } from "components/content/heros";
import { IPageAbout } from "lib/contentful";
import { PageComponent } from "lib/page";
import React from "react";
import styled, { css } from "styled-components";

import { LayoutRoot } from "../layout";

const StyledAboutMyClientsImageSection = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-self: stretch;
`;

const StyledAboutMyClientsTitle = styled.div`
  ${makeInset({ horizontal: 40, vertical: 40 })};
  text-align: center;
  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({ horizontal: 60, vertical: 60 })};
      max-width: 60%;
    `
  })}
`;

const StyledClientImage = styled.div`
  width: 33.333%;
  ${makeFlex({
    direction: "row",
    justify: "center",
    align: "center"
  })};
  overflow: hidden;

  & > .image {
    max-width: 100%;
    max-height: 100%;
    transform: scale(1.5);
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  ${makeResponsive({
    beginAt: "laptop",
    style: `
      & > .image { 
        height: 100%;
        
        & > img {
          height: 100%;
        }
      }
    `
  })}
`;

const StyledCertSection = styled.div`
  ${makeFlex({
    direction: "row",
    justify: "center",
    align: "center"
  })};

  & > div {
    &:not(:last-child) {
      ${makeOutset({ right: 20 })};
    }
  }
`;

export type AboutPageProps = {
  data: IPageAbout;
};

export const AboutPage: PageComponent<AboutPageProps> = ({
  data: { fields }
}) => {
  const [windowWidth, { tabletLandscape }] = useBreakpoints();
  const isLessThanLandscape = windowWidth < tabletLandscape;

  return (
    <>
      <HeroOffsetVertical
        title="Your future is inside of you"
        subTitle="Stop settling for ordinary and get the life, love and business you really want! I've done it, I’ll show you how. Stop settling for ordinary and get the life, love and business you really want! I've done it, I’ll show you how."
        img={fields.introImage.fields.file.url}
        imgAlt={fields.introImageAltText}
      />

      <Section
        styleType="blank"
        background={
          isLessThanLandscape
            ? { fixed: "light" }
            : { scalable: { color: "light", scale: 3 } }
        }
      >
        <SectionCopy>
          <ContentfulRichText
            richText={fields.introDescription}
            copyProps={{ fontSize: "md", variant: "paragraph" }}
          />
        </SectionCopy>
      </Section>
      <SectionSpacer />

      {/* My Story */}
      <Section styleType="layered">
        <Title size="lg">{fields.myStoryTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            richText={fields.myStoryDescription}
            copyProps={{ fontSize: "md", variant: "paragraph" }}
          />
        </SectionCopy>
      </Section>

      {/* My Style */}
      <Section styleType="blank">
        <Title size="lg">{fields.myStyleTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            richText={fields.myStyleDescription}
            copyProps={{ fontSize: "md", variant: "paragraph" }}
          />
        </SectionCopy>
      </Section>

      {/* My Clients */}
      <SectionSpacer />
      <Section
        styleType="split"
        background={{ scalable: { color: "light", scale: 3 } }}
      >
        <StyledAboutMyClientsImageSection>
          {fields.myClientsImages.map((clientImage) => (
            <StyledClientImage key={clientImage.fields.file.url}>
              <Image
                src={clientImage.fields.file.url}
                alt={clientImage.fields.title}
                manualWidth="100%"
              />
            </StyledClientImage>
          ))}
        </StyledAboutMyClientsImageSection>
        <StyledAboutMyClientsTitle>
          <Title size="lg">{fields.myClientsTitle}</Title>
          <SectionCopy>
            <ContentfulRichText
              richText={fields.myClientsDescription}
              copyProps={{ fontSize: "md", variant: "paragraph" }}
            />
          </SectionCopy>
          <SectionFooter>
            <Button label="Become one of these amazing people" />
          </SectionFooter>
        </StyledAboutMyClientsTitle>
      </Section>

      {/* My Certifications */}
      <Section styleType="blank">
        <Title size="lg">{fields.certificationsTitle}</Title>
        <StyledCertSection>
          {/* {fields.certificationsListOfCertifications.map(
            ({
              fields: { sealImage, certificationTitle }
            }: {
              fields: { sealImage: Asset; certificationTitle: string };
            }) => {
              return (
                <Image
                  src={sealImage.fields.file.url}
                  alt={fields.certificationTitle}
                  size={{ custom: 100 }}
                  key={fields.certificationTitle}
                />
              );
            }
          )} */}
        </StyledCertSection>
      </Section>

      {/* Contact */}
      <Section styleType="layered">
        <Title size="lg">{fields.contactTitle}</Title>
        <SectionCopy>
          <ContentfulRichText
            richText={fields.contactDescription}
            copyProps={{ fontSize: "md", variant: "paragraph" }}
          />
        </SectionCopy>
        <SectionFooter>
          <div
            css={css`
              max-width: 80%;
              margin: 0 auto;
            `}
          >
            <div>Aweber placeholder</div>
          </div>
        </SectionFooter>
      </Section>
    </>
  );
};

AboutPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

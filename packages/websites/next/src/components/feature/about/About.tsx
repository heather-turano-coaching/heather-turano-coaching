import {
  Button,
  ContentfulRichText,
  Image,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSpacer,
  Title
} from "@heather-turano-coaching/components";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { makeFlex } from "@heather-turano-coaching/core/theme";
import {
  makeFont,
  makeInset,
  makeOutset,
  makeResponsive,
  makeSize
} from "@heather-turano-coaching/design-system";
import { Asset } from "contentful";
import { IPageAbout } from "lib/contentful";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { FormQuickContact } from "../forms/FormQuickContact";

const StyledAboutImageSection = styled.div`
  width: 100%;
  position: relative;

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      flex: 2;
    `
  })}

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
        top: 0;
        bottom: 0;
        left: -1;
        width: 50%;
        height: 100%;
        background-image: linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.00) 100%);
      `
    })}
  }
`;

const StyledAboutTitleSection = styled.div`
  ${makeInset({ horizontal: 40, vertical: 40 })};
  text-align: center;
  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({ horizontal: 60 })};
      max-width: ${makeSize({ custom: 500 })};
    `
  })}

  p {
    ${makeFont({
      fontSize: "h1",
      fontFamily: "Montserrat"
    })}
  }
`;

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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  })};

  & > div {
    &:not(:last-child) {
      ${makeOutset({ right: 20 })};
    }
  }
`;

export const PageAbout: FC<IPageAbout> = ({ fields }) => {
  const [windowWidth, { tabletLandscape }] = useBreakpoints();
  const isLessThanLandscape = windowWidth < tabletLandscape;

  return (
    <>
      <Section styleType="split">
        <StyledAboutTitleSection>
          <SectionCopy>
            <ContentfulRichText
              richText={fields.introTitle}
              copyProps={{ fontSize: "md", variant: "paragraph" }}
            />
          </SectionCopy>
        </StyledAboutTitleSection>
        <StyledAboutImageSection>
          <Image
            src={fields.introImage.fields.file.url}
            alt={fields.introImageAltText}
            manualWidth="100%"
          />
        </StyledAboutImageSection>
      </Section>
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
          {fields.certificationsListOfCertifications.map(
            ({ fields }: { fields: any }) => {
              const image = fields.sealImage as Asset;
              return (
                <Image
                  src={image.fields.file.url}
                  alt={fields.certificationTitle}
                  size={{ custom: 100 }}
                  key={fields.certificationTitle}
                />
              );
            }
          )}
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
            <FormQuickContact
              submitButtonLabel={fields.contactFormSubmitLabel}
              submitButtonColor="secondary"
            />
          </div>
        </SectionFooter>
      </Section>
    </>
  );
};

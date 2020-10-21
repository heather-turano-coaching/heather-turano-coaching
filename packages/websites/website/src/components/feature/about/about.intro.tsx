import {
  ContentfulRichText,
  Image,
  Section,
  SectionCopy,
  SectionSpacer
} from "@heather-turano-coaching/core/components";
import {
  makeFont,
  makeInset,
  makeResponsive,
  makeSize
} from "@heather-turano-coaching/core/design-system";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, memo, useMemo } from "react";
import styled from "styled-components";

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

export const AboutIntro: FC = memo(function AboutIntro() {
  const { contentfulPageAbout: queryData } = useStaticQuery<{
    contentfulPageAbout: {
      pageTitle: string;
      introTitle: { json: string };
      introImageAltText: string;
      introImage: { file: { url: string } };
      introDescription: {
        json: string;
      };
    };
  }>(graphql`
    {
      contentfulPageAbout {
        pageTitle
        introTitle {
          json
        }
        introImageAltText
        introImage {
          file {
            url
          }
        }
        introDescription {
          json
        }
      }
    }
  `);

  const [windowWidth, { tabletLandscape }] = useBreakpoints();
  const isLessThanLandscape = windowWidth < tabletLandscape;

  return (
    <>
      <Section styleType="split">
        <StyledAboutTitleSection>
          <SectionCopy>
            <ContentfulRichText
              richText={queryData.introTitle.json}
              copyProps={{ fontSize: "md", variant: "paragraph" }}
            />
          </SectionCopy>
        </StyledAboutTitleSection>
        <StyledAboutImageSection>
          <Image
            src={queryData.introImage.file.url}
            alt={queryData.introImageAltText}
            manualWidth="100%"
          />
        </StyledAboutImageSection>
      </Section>
      {useMemo(
        () => (
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
                richText={queryData.introDescription.json}
                copyProps={{ fontSize: "md", variant: "paragraph" }}
              />
            </SectionCopy>
          </Section>
        ),
        [isLessThanLandscape, queryData]
      )}
      <SectionSpacer />
    </>
  );
});

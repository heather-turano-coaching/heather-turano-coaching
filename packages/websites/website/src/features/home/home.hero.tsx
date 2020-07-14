import {
  Button,
  Heading,
  Hero,
  Section,
} from "@heather-turano-coaching/components";
import { makeOutset } from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

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

export const HomeHero = () => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        heroTitle
        heroSubTitle
        heroImage {
          title
          file {
            url
          }
        }
        heroCtaButtonLabel
        heroCtaUrl
      }
    }
  `);

  return (
    <Hero
      image={queryData.heroImage.file.url}
      alt={queryData.heroImage.title.split(" ").join("")}
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
            {queryData.heroTitle.split(" ").map((word: string) => (
              <div key={word}>{word}</div>
            ))}
          </Heading>
          <Heading
            fontSize="h4"
            fontColor={{ fixed: "light" }}
            fontFamily="Muli"
          >
            {queryData.heroSubTitle}
          </Heading>
          <Button label={queryData.heroCtaButtonLabel} />
        </StyledHeading>
      </Section>
    </Hero>
  );
};

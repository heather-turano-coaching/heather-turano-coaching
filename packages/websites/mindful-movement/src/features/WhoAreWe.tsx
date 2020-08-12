import {
  ContentfulRichText,
  Heading,
  Section
} from "@heather-turano-coaching/components";
import {
  makeInset,
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import styled, { css } from "styled-components";

const LeftPane = styled.div`
  flex: 1;
  height: 500px;
  text-align: center;
  ${makeOutset({ vertical: 40 })};

  img {
    height: auto;
    width: 100%;

    ${makeResponsive({
      beginAt: "phoneLg",
      style: css`
        height: 100%;
        width: auto;
      `
    })}
  }
`;

const RightPane = styled.div`
  flex: 1;
  align-items: center;
  ${makeInset({ horizontal: 32, bottom: 100 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: css`
      ${makeInset({ right: 32 })};
    `
  })}
`;

export const WhoWeAre: FC = () => {
  const { contentfulPageHome: data } = useStaticQuery<{
    contentfulPageHome: {
      whoAreWeTitle: string;
      whoAreWeImage: {
        file: { url: string };
      };
      whoAreWeDescription: { json: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        whoAreWeTitle
        whoAreWeImage {
          file {
            url
          }
        }
        whoAreWeDescription {
          json
        }
      }
    }
  `);

  return (
    <Section styleType="split">
      <LeftPane>
        <img src={data.whoAreWeImage.file.url} alt="heather-and-amanda" />
      </LeftPane>
      <RightPane>
        <Heading fontSize="h1" fontFamily="Playfair Display">
          {data.whoAreWeTitle}
        </Heading>
        <br />
        <ContentfulRichText
          copyProps={{ variant: "label" }}
          richText={data.whoAreWeDescription.json}
        />
      </RightPane>
    </Section>
  );
};

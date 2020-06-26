import {
  ContentfulRichText,
  Heading,
  Section,
} from "@heather-turano-coaching/components";
import { SEO } from "@heather-turano-coaching/gatsby";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Layout } from "../components";

const StyledSectionContainer = styled.div`
  height: 100%;

  & > * {
    height: 100%;
  }
`;

const IndexPage = () => {
  const { contentfulPagePaymentSuccess: data } = useStaticQuery<{
    contentfulPagePaymentSuccess: {
      title: string;
      message: { json: string };
    };
  }>(graphql`
    {
      contentfulPagePaymentSuccess {
        title
        message {
          json
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO pageTitle="Payment Successful!" />
      <StyledSectionContainer>
        <Section styleType="layered">
          <Heading fontSize="h1" fontFamily="Playfair Display">
            {data.title}
          </Heading>
          <br />
          <ContentfulRichText
            richText={data.message.json}
            copyProps={{
              variant: "label",
              fontSize: "md",
            }}
          />
        </Section>
      </StyledSectionContainer>
    </Layout>
  );
};

export default IndexPage;

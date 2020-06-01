import {
  ContentfulRichText,
  Heading,
  Section,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Layout, SEO } from "../components";

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
      <SEO title="Payment Success" description="Successful payment page" />
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

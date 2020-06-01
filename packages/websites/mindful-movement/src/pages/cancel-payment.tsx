import {
  Button,
  ContentfulRichText,
  Heading,
  Section,
} from "@heather-turano-coaching/components";
import { navigate } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import React, { useCallback } from "react";
import styled from "styled-components";

import { Layout, SEO } from "../components";

const StyledSectionContainer = styled.div`
  height: 100%;

  & > * {
    height: 100%;
  }
`;

const IndexPage = () => {
  const { contentfulPageCancelPayment: data } = useStaticQuery<{
    contentfulPageCancelPayment: {
      title: string;
      message: { json: string };
      redirectButtonText: string;
    };
  }>(graphql`
    {
      contentfulPageCancelPayment {
        title
        message {
          json
        }
        redirectButtonText
      }
    }
  `);

  const handleClick = useCallback(() => {
    navigate("/#pricing");
  }, []);

  return (
    <Layout>
      <SEO title="Payment cancelled" description="Confirm cancelled payment" />
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
          <br />
          <Button
            styleType="secondary"
            onClick={handleClick}
            label={data.redirectButtonText}
          />
        </Section>
      </StyledSectionContainer>
    </Layout>
  );
};

export default IndexPage;

import {
  Button,
  Heading,
  Section,
  Typography
} from "@heather-turano-coaching/components";
import { SEO } from "@heather-turano-coaching/gatsby";
import { navigate } from "gatsby";
import React, { useCallback } from "react";
import styled from "styled-components";

import { Layout } from "../components";

const StyledSectionContainer = styled.div`
  height: 100%;

  & > * {
    height: 100%;
  }
`;

const IndexPage = () => {
  const handleClick = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Layout>
      <SEO pageTitle="Payment Cancelled" />
      <StyledSectionContainer>
        <Section styleType="layered">
          <Heading fontSize="h1" fontFamily="Playfair Display">
            Your payment has been cancelled.
          </Heading>
          <br />
          <Typography variant="label" fontSize="sm">
            Dont fret, your transaction has been cancelled and your card has not
            been charged. All information you entered has been deleted.
          </Typography>
          <br />
          <Typography variant="label" fontSize="sm">
            If you canceled on accident, which we hope you did, click the button
            below and head back to the main page to select a package.
          </Typography>
          <br />
          <Button
            styleType="secondary"
            onClick={handleClick}
            label="Let's try again"
          />
        </Section>
      </StyledSectionContainer>
    </Layout>
  );
};

export default IndexPage;

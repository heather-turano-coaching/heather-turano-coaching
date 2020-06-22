import { Content, Heading, Section } from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Layout, SEO } from "../components";

const TermsOfService = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery<{ markdownRemark: { id: string; html: string } }>(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "terms-of-service" } }) {
        html
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="Terms and Conditions"
        description="Mindful Movement 100s website terms and conditions"
      />
      <Section styleType="blank">
        <Heading fontSize="h1" fontFamily="Playfair Display">
          Terms of Service
        </Heading>
        <br />
        <Content htmlContent={html} />
      </Section>
    </Layout>
  );
};

export default TermsOfService;

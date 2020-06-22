import { Content, Heading, Section } from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Layout, SEO } from "../components";

const PrivacyPolicyPage = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery<{ markdownRemark: { id: string; html: string } }>(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "privacy-policy" } }) {
        html
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Mindful Movement 100's privacy policy"
      />
      <Section styleType="blank">
        <Heading fontSize="h1" fontFamily="Playfair Display">
          Privacy Policy
        </Heading>
        <br />
        <Content htmlContent={html} />
      </Section>
    </Layout>
  );
};

export default PrivacyPolicyPage;

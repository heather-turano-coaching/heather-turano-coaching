import { Content, Heading, Section } from "@heather-turano-coaching/components";
import { graphql } from "gatsby";
import React, { FC } from "react";

import { Layout, SEO } from "../components";

interface DisclosuresTemplateData {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        metaDescription: string;
      };
    };
  };
}

const DisclosuresTemplate: FC<DisclosuresTemplateData> = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, metaDescription },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <Section styleType="layered">
        <Heading fontSize="h1" fontFamily="Playfair Display">
          {title}
        </Heading>
        <br />
        <Content htmlContent={html} />
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        metaDescription
      }
    }
  }
`;

export default DisclosuresTemplate;

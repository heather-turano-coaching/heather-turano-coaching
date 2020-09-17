import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { MetaData, PageContainer } from "../components/content";
import { Layout } from "../components/layout";
import {
  AboutCertifications,
  AboutContact,
  AboutIntro,
  AboutMyClients,
  AboutMyStory,
  AboutMyStyle
} from "../features/about";

// @ts-ignore
const AboutPage: FC = ({ location }) => {
  const { contentfulPageAbout: queryData } = useStaticQuery<{
    contentfulPageAbout: { pageTitle: string };
  }>(graphql`
    {
      contentfulPageAbout {
        pageTitle
      }
    }
  `);

  return (
    <Layout pageTitle={queryData.pageTitle}>
      <PageContainer>
        <MetaData location={location} />
        <AboutIntro />
        <AboutMyStory />
        <AboutMyStyle />
        <AboutMyClients />
        <AboutCertifications />
        <AboutContact />
      </PageContainer>
    </Layout>
  );
};

export default AboutPage;

import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { MetaData, PageContainer } from "../components/content";
import {
  HomeAbout,
  HomeContact,
  HomeHero,
  HomeServices,
  HomeTestimonials
} from "../components/feature/home";
import { Layout } from "../components/layout";

// @ts-ignore
const Index: FC = ({ location }) => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        pageTitle
      }
    }
  `);

  return (
    <Layout pageTitle={queryData.pageTitle}>
      <MetaData location={location} />
      <PageContainer>
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeTestimonials />
        <HomeContact />
      </PageContainer>
    </Layout>
  );
};

export default Index;

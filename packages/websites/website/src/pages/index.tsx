import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Layout, MetaData, PageContainer } from "../components";
import {
  HomeAbout,
  HomeContact,
  HomeHero,
  HomeServices,
  HomeTestimonials,
} from "../features/home";

// @ts-ignore
const Index = ({ location }) => {
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

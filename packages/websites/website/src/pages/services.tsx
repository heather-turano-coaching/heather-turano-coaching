import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Layout, MetaData, PageContainer } from "../components";

// @ts-ignore
const ServicesPage = ({ location }) => {
  const { contentfulPageService: queryData } = useStaticQuery(graphql`
    {
      contentfulPageService {
        pageTitle
      }
    }
  `);

  return (
    <Layout pageTitle={queryData.pageTitle}>
      <MetaData location={location} />
      <PageContainer></PageContainer>
    </Layout>
  );
};

export default ServicesPage;

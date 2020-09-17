import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { MetaData, PageContainer } from "../components/content";
import { Layout } from "../components/layout";

// @ts-ignore
const ServicesPage: FC = ({ location }) => {
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

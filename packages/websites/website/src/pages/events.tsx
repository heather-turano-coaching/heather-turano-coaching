import React, { FC } from "react";

import { MetaData, PageContainer } from "../components/content";
import { Layout } from "../components/layout";

// @ts-ignore
const Events: FC = ({ location }) => {
  return (
    <Layout pageTitle="Events">
      <MetaData location={location} />
      <PageContainer></PageContainer>
    </Layout>
  );
};

export default Events;

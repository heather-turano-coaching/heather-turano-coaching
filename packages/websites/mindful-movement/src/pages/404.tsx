import { SEO } from "@heather-turano-coaching/gatsby";
import React from "react";

import { Layout } from "../components";

const NotFoundPage = () => (
  <Layout>
    <SEO
      pageTitle="Page Not Found"
      pageDescription="Unfortunately, this page doesn't exist."
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

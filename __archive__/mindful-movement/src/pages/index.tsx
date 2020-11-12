import { SEO } from "@heather-turano-coaching/gatsby";
import React from "react";

import { Layout } from "../components";
import { About } from "../features/about";
import { Hero } from "../features/Hero";
import { Introduction } from "../features/Introduction";
import { Pricing } from "../features/Pricing";
import { Schedule } from "../features/Schedule";
import { WhoWeAre } from "../features/WhoAreWe";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle="Welcome"
        pageDescription="Welcome to Mindful Movement 100. We're here to help you re-invent your relationship with exercise."
      />
      <Hero />
      <Introduction />
      <div id="about" />
      <About />
      <div id="who-we-are" />
      <WhoWeAre />
      <div id="pricing" />
      <Pricing />
      <div id="schedule" />
      <Schedule />
    </Layout>
  );
};

export default IndexPage;

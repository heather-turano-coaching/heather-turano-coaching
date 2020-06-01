import React from "react";

import { Layout, SEO } from "../components";
import { About } from "../features/about";
import { Hero } from "../features/Hero";
import { Introduction } from "../features/Introduction";
import { Pricing } from "../features/Pricing";
import { Schedule } from "../features/Schedule";
import { WhoWeAre } from "../features/WhoAreWe";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="home page for 100 days" />
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

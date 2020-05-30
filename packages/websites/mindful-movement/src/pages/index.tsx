import React from "react";

import { Layout, SEO } from "../components";
import { NavBar } from "../components/NavBar";
import NavBarLink from "../components/NavBarLink";
import { NavBarSection } from "../components/NavBarSection";
import { NavLogo } from "../components/NavLogo";
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
      <NavBar>
        <NavBarSection>
          <NavLogo />
        </NavBarSection>
        <NavBarSection component="ul" collapse>
          <NavBarLink to="#about" variant="anchor">
            About
          </NavBarLink>
          <NavBarLink to="#who-we-are" variant="anchor">
            Who we are
          </NavBarLink>
          <NavBarLink to="#pricing" variant="anchor">
            Pricing
          </NavBarLink>
          <NavBarLink to="#schedule" variant="anchor">
            Schedule
          </NavBarLink>
        </NavBarSection>
      </NavBar>
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

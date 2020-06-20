import React from "react";

import { Footer } from "./Footer";
import { FooterSection } from "./FooterSection";
import { FooterText } from "./FooterText";

export default {
  component: Footer,
  title: "Navigation|Footer",
};

export const plainFooter = () => <Footer></Footer>;
export const with1Section = () => (
  <Footer>
    <FooterSection title="footer section"></FooterSection>
  </Footer>
);
export const with1SectionWithLinks = () => (
  <Footer>
    <FooterSection title="footer section">
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
    </FooterSection>
  </Footer>
);
export const with2SectionsWithLInks = () => (
  <Footer>
    <FooterSection title="footer section">
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
    </FooterSection>
    <FooterSection title="footer section">
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
    </FooterSection>
  </Footer>
);
export const with3SectionsWithLInks = () => (
  <Footer>
    <FooterSection title="footer section">
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
    </FooterSection>
    <FooterSection title="footer section">
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
    </FooterSection>
    <FooterSection title="footer section">
      <FooterText>
        <a href="#location">testing...</a>
      </FooterText>
    </FooterSection>
  </Footer>
);

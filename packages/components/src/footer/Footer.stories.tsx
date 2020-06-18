import React from "react";

import { Footer, FooterSection, FooterText } from ".";

export default {
  component: Footer,
  title: "Core|Footer",
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

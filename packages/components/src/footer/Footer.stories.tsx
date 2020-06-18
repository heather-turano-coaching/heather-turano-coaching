import React from "react";

import { Footer, FooterSection, FooterSectionLink } from ".";

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
      <FooterSectionLink>
        <a href="#location">testing...</a>
      </FooterSectionLink>
    </FooterSection>
  </Footer>
);
export const with2SectionsWithLInks = () => (
  <Footer>
    <FooterSection title="footer section">
      <FooterSectionLink>
        <a href="#location">testing...</a>
      </FooterSectionLink>
    </FooterSection>
    <FooterSection title="footer section">
      <FooterSectionLink>
        <a href="#location">testing...</a>
      </FooterSectionLink>
    </FooterSection>
  </Footer>
);
export const with3SectionsWithLInks = () => (
  <Footer>
    <FooterSection title="footer section">
      <FooterSectionLink>
        <a href="#location">testing...</a>
      </FooterSectionLink>
    </FooterSection>
    <FooterSection title="footer section">
      <FooterSectionLink>
        <a href="#location">testing...</a>
      </FooterSectionLink>
    </FooterSection>
    <FooterSection title="footer section">
      <FooterSectionLink>
        <a href="#location">testing...</a>
      </FooterSectionLink>
    </FooterSection>
  </Footer>
);

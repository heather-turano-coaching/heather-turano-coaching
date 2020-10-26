import React, { FC } from "react";

import { Footer } from "./Footer";
import { FooterSection } from "./FooterSection";
import { FooterText } from "./FooterText";

export default {
  component: Footer,
  title: "Navigation|Footer"
};

export const plainFooter: FC = () => <Footer></Footer>;
export const with1Section: FC = () => (
  <Footer>
    <FooterSection title="footer section"></FooterSection>
  </Footer>
);
export const with1SectionWithLinks: FC = () => (
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
export const with2SectionsWithLInks: FC = () => (
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
export const with3SectionsWithLInks: FC = () => (
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

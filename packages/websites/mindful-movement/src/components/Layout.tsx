import {
  Footer,
  FooterSection,
  FooterText
} from "@heather-turano-coaching/components";
import { makeColor } from "@heather-turano-coaching/design-system";
import { Link, graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { NavBar } from "./NavBar";
import NavBarLinkAnchor from "./NavBarLinkAnchor";
import { NavBarSection } from "./NavBarSection";
import { NavLogo } from "./NavLogo";

export const Layout: FC = ({ children }) => {
  const {
    allMarkdownRemark: { nodes: disclosurePages }
  } = useStaticQuery<{
    allMarkdownRemark: {
      nodes: { frontmatter: { slug: string; title: string } }[];
    };
  }>(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___order }
        filter: { frontmatter: { slug: { ne: null } } }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <div id="htc-root">
      <NavBar>
        <NavBarSection>
          <NavLogo />
        </NavBarSection>
        <NavBarSection component="ul" collapse>
          <NavBarLinkAnchor href="/#about">About</NavBarLinkAnchor>
          <NavBarLinkAnchor href="/#who-we-are">Us</NavBarLinkAnchor>
          <NavBarLinkAnchor href="/#pricing">Pricing</NavBarLinkAnchor>
          <NavBarLinkAnchor href="/#schedule">Schedule</NavBarLinkAnchor>
        </NavBarSection>
      </NavBar>
      {children}
      <Footer>
        <FooterSection title="Mindful Movement 100">
          <FooterText>
            <span>
              Copyright © 2020, Heather Turano Coaching, LLC, All Rights
              Reserved. Mindful Movement 100 is a trademark of Heather Turano
              Coaching, LLC. The use of the trademark Mindful Movement 100
              outside the bounds of this website requires exclusive written
              consent from Heather Turano Coaching, LLC."
            </span>
          </FooterText>
          <FooterText>
            <span>This website was designed and developed by &nbsp;</span>
            <div>
              <a
                href="https://github.com/drewdecarme"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inlineBlock",
                  textDecorationColor: `${makeColor({ fixed: "light" })}`,
                  color: `${makeColor({ fixed: "light" })}`
                }}
              >
                Drew DeCarme
              </a>
            </div>
          </FooterText>
        </FooterSection>
        <FooterSection title="Privacy &amp; Security">
          <FooterText>
            Mindful Movement 100 takes your privacy very seriously. Use the
            links below to learn more about our policies
          </FooterText>
          <ul>
            {disclosurePages.map((page) => (
              <li key={page.frontmatter.slug}>
                <FooterText>
                  <Link to={page.frontmatter.slug}>
                    {page.frontmatter.title}
                  </Link>
                </FooterText>
              </li>
            ))}
          </ul>
        </FooterSection>
        <FooterSection title="Sponsors">
          <FooterText>
            <div>Heather Turano</div>
            <a
              href="https://heatherturanocoaching.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heather Turano Coaching, LLC
            </a>
          </FooterText>
          <FooterText>
            <div>Amanda Rock</div>
            <a
              href="http://www.thecompassconsultinggroup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Compass Consulting Group
            </a>
          </FooterText>
        </FooterSection>
      </Footer>
    </div>
  );
};

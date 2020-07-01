import {
  Footer,
  FooterSection,
  FooterText,
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
    allMarkdownRemark: { nodes: disclosurePages },
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
      </NavBar>
      {children}
      <Footer>
        <FooterSection title="Heather Turano Coaching, LLC">
          <FooterText>
            <span>
              Copyright © 2020, Heather Turano Coaching, LLC, All Rights
              Reserved. Heather Turano Coaching is a trademark of Heather Turano
              Coaching, LLC. The use of the trademark Heather Turano Coaching
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
                  color: `${makeColor({ fixed: "light" })}`,
                }}
              >
                Drew DeCarme
              </a>
            </div>
          </FooterText>
        </FooterSection>
        <FooterSection title="Privacy &amp; Security">
          <FooterText>
            Heather Turano Coaching takes your privacy very seriously. Use the
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
        <FooterSection title="Quick Links">
          <FooterText>
            <div>Website</div>
            <a
              href="https://heatherturanocoaching.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heather Turano Coaching
            </a>
          </FooterText>
          <FooterText>
            <div>Mindful Movement 100</div>
            <a
              href="https://mindfulmovement100.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mindful Movement 100
            </a>
          </FooterText>
        </FooterSection>
      </Footer>
    </div>
  );
};

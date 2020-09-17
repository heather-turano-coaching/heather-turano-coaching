import {
  Footer,
  FooterSection,
  FooterText
} from "@heather-turano-coaching/components";
import {
  makeColor,
  makeFontFace,
  makeResponsive
} from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import {
  FrameworkLink,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkContent,
  logos
} from "../content";
import { FormSubscribe } from "../feature";

/**
 * @todo Convert images to gatsby-image
 */
// import Img from "gatsby-image";

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  html{
    ${makeResponsive({
      beginAt: "desktop",
      style: `
        font-size: 18px;
      `
    })}
  }

  body {
    overflow-x: hidden;
  }
`;

const fontFaceDefs = makeFontFace();
const fontFaceLinks = fontFaceDefs.reduce(
  (accum, fontFaceDef, i) =>
    typeof fontFaceDef === "string"
      ? [
          ...accum,
          <link
            key={`link-${i.toString()}`}
            rel="stylesheet"
            href={fontFaceDef.split('("')[1].split('")')[0]}
          />
        ]
      : accum,
  [] as ReactNode[]
);

/**
 * @todo Get this data from Contentful API
 */
const headerNavLinks = [
  {
    label: "home",
    route: "/"
  },
  {
    label: "about",
    route: "/about"
  },
  {
    label: "services",
    route: "/services"
  },
  {
    label: "blog",
    route: "/blog"
  }
];

export const Layout: FC<{ pageTitle: string }> = ({
  pageTitle = "",
  children
}) => {
  const {
    allGhostSettings: { edges },
    allMarkdownRemark: { nodes: disclosurePages }
  } = useStaticQuery<{
    allGhostSettings: { edges: { node: { lang: string } }[] };
    allMarkdownRemark: {
      nodes: { frontmatter: { slug: string; title: string } }[];
    };
  }>(graphql`
    {
      allGhostSettings {
        edges {
          node {
            id
          }
        }
      }
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

  const site = edges[0].node;
  const pTitle = `${pageTitle
    .substring(0, 1)
    .toUpperCase()}${pageTitle.substring(1)}`;

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        {fontFaceLinks}
        <title>{`${pTitle} | Heather Turano Coaching`}</title>
      </Helmet>
      <GlobalStyle />
      <HeaderNav
        homeRoute="https://heatherturanocoaching.com"
        logos={logos}
        navItems={headerNavLinks.map(({ label, route }) => (
          <HeaderNavLink
            key={label}
            isActive={label === pageTitle.toLowerCase()}
          >
            <a href={route}>
              <HeaderNavLinkContent>{label}</HeaderNavLinkContent>
            </a>
          </HeaderNavLink>
        ))}
      />
      {children}
      <Footer>
        <FooterSection title="Heather Turano Coaching, LLC">
          <FooterText>
            <span>
              Copyright © 2018, Heather Turano Coaching, LLC, All Rights
              Reserved. Live Life Mindful is a trademark of Heather Turano
              Coaching, LLC. The use of the trademark Live Life Mindful outside
              the bounds of this website requires exclusive written consent from
              Heather Turano Coaching, LLC.
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
                Imagined Elements, LLC
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
                  <FrameworkLink to={page.frontmatter.slug}>
                    {page.frontmatter.title}
                  </FrameworkLink>
                </FooterText>
              </li>
            ))}
          </ul>
        </FooterSection>
        <FooterSection title="Subscribe">
          <FormSubscribe fieldPrefix="footer" />
        </FooterSection>
      </Footer>
    </>
  );
};

import {
  makeFontFace,
  makeResponsive
} from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import {
  FooterNav,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkContent,
  logos
} from "..";

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

export interface NavLinkType {
  label: string;
  route: string;
}

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
const usefulLinks: NavLinkType[] = [
  {
    label: "Privacy Policy",
    route: "/privacy-policy"
  },
  {
    label: "Terms of Service",
    route: "/terms-of-service"
  },
  {
    label: "Cookie Policy",
    route: "/cookie-policy"
  }
];

export const Layout: FC<{ pageTitle: string }> = ({
  pageTitle = "",
  children
}) => {
  const {
    allGhostSettings: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostSettings {
        edges {
          node {
            id
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
        <title>{`${pTitle} | Live Life Mindful`}</title>
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
      <FooterNav
        attribution="Copyright © 2018, Heather Turano Coaching, LLC, All Rights
            Reserved. Live Life Mindful is a trademark of Heather Turano Coaching,
            LLC. The use of the trademark Live Life Mindful outside the bounds of
            this website requires exclusive written consent from Heather Turano
            Coaching, LLC."
        createdBy={{
          intro:
            "This website was designed and developed by the amazing people at",
          link: "http://www.imaginedelements.com",
          name: "Imagined Elements, LLC"
        }}
        mainMenu={headerNavLinks}
        usefulLinks={usefulLinks}
      />
    </>
  );
};

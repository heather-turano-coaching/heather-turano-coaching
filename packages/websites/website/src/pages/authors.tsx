import { AvatarCard, makeFlex } from "@heather-turano-coaching/core/components";
import {
  makeInset,
  makeOutset,
  makeReset,
  makeResponsive,
  makeSize
} from "@heather-turano-coaching/core/design-system";
import { Author } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import {
  FrameworkLink,
  PageContainer,
  PageHeader
} from "../components/content";
import { Layout, LayoutColumn, LayoutContainer } from "../components/layout";
import { universalHover } from "../components/styles";
import { destructureNodes } from "../utils";

const StyledAuthorPageContent = styled.ul`
  ${makeReset("list")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-start", "flex-start")};
    `
  })}

  & > li {
    min-width: ${makeSize({ custom: 280 })};
    align-self: stretch;

    ${makeResponsive({
      endAt: "tabletPortrait",
      style: `
        ${makeOutset({ bottom: 24 })};
      `
    })}

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
      flex-basis: 50%;
        &:not(:first-child) {
          ${makeInset({ left: 12 })};
        }
        &:not(:last-child) {
          ${makeInset({ right: 12 })};
        }
      `
    })}

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
      flex-basis: 33.33%;
    `
    })}

    a {
      ${makeReset("anchor")};
      display: block;
      height: 100%;
      width: inherit;
      ${universalHover};
    }
  }
`;

export const AuthorsPage: FC = () => {
  const {
    allGhostAuthor: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostAuthor(filter: { postCount: { gt: 0 } }) {
        edges {
          node {
            ...GhostAuthorFields
          }
        }
      }
    }
  `);

  const authors = destructureNodes<Author>(edges);

  return (
    <Layout pageTitle="Authors">
      <PageContainer>
        <LayoutContainer layoutType="stacked">
          <LayoutColumn colWidth="100%">
            <PageHeader
              pageName="authors"
              pageTitle="authors"
              titleColor={{ scalable: { color: "accent" } }}
            />
          </LayoutColumn>
        </LayoutContainer>
        <LayoutContainer>
          <LayoutColumn>
            <StyledAuthorPageContent>
              {authors.map((author: Author) => (
                <li key={author.id}>
                  <FrameworkLink to={`/authors/${author.slug}`}>
                    <AvatarCard
                      authorName={author.name as string}
                      avatarImg={author.profile_image as string}
                      bio={author.bio}
                      featureImage={author.cover_image}
                    />
                  </FrameworkLink>
                </li>
              ))}
            </StyledAuthorPageContent>
          </LayoutColumn>
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default AuthorsPage;

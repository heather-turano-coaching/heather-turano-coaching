import {
  AvatarListItem,
  ButtonAction,
  RandomColor,
  generateRandomColor
} from "@heather-turano-coaching/components";
import {
  makeColor,
  makeOutset,
  makeReset,
  makeSize
} from "@heather-turano-coaching/design-system";
import { Author, PostOrPage } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import React, { FC } from "react";
import styled from "styled-components";

import { FrameworkLink } from "../../content";
import {
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle
} from "../../layout";
import { destructureNodes } from "../../utils";

interface BlockContributorsProps {
  title?: string;
  posts?: PostOrPage[];
  filter?: "all" | "unique";
}

const StyledBlockContributors = styled.ul`
  ${makeReset("list")};
`;

const StyledLinks = styled.li<{ hoverColor: RandomColor }>`
  display: block;
  transition: border-color 0.15s ease-in-out;
  border: ${makeSize({ custom: 1 })} solid transparent;

  &:not(:first-child) {
    ${makeOutset({ top: 8 })};
  }

  a {
    ${makeReset("anchor")};
    width: 100%;
    display: block;
  }

  &:hover {
    cursor: pointer;
    border-color: ${({ hoverColor }) =>
      makeColor({
        scalable: { color: hoverColor, scale: 1 }
      })};
  }
`;

export const BlockContributors: FC<BlockContributorsProps> = ({
  title = "Authors",
  posts
}) => {
  const {
    allGhostAuthor: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostAuthor(filter: { postCount: { gt: 0 } }) {
        edges {
          node {
            name
            cover_image
            profile_image
            bio
            id
            slug
          }
        }
      }
    }
  `);

  const postAuthors = posts
    ? uniqBy(
        posts.reduce<Author[]>(
          (accum, post) => [...accum, ...(post.authors as Author[])],
          []
        ),
        "id"
      )
    : destructureNodes(edges);

  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title}>
        <FrameworkLink to="/authors">
          <ButtonAction
            buttonSize="md"
            buttonColor={{ scalable: { color: "gray", scale: 1 } }}
            icon="users"
            iconWeight="fad"
            title="View all contributors"
          />
        </FrameworkLink>
      </LayoutBlockTitle>
      <LayoutBlockContent>
        <StyledBlockContributors>
          {postAuthors.map((author: Author) => {
            const color = generateRandomColor();
            return (
              <StyledLinks hoverColor={color} key={author.slug}>
                <FrameworkLink to={`/authors/${author.slug}`}>
                  <AvatarListItem
                    name={author.name as string}
                    image={author.profile_image as string}
                    alt={author.name as string}
                    accentColor={color}
                    bio={author.bio}
                  />
                </FrameworkLink>
              </StyledLinks>
            );
          })}
        </StyledBlockContributors>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

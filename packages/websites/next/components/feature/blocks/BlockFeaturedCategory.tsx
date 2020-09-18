import {
  Button,
  ButtonAction,
  ButtonGroup,
  Heading,
  Typography
} from "@heather-turano-coaching/components";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import { FontProperties } from "@heather-turano-coaching/design-system";
import {
  makeColor,
  makeInset,
  makeRhythm
} from "@heather-turano-coaching/design-system";
import { Tag } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import { FrameworkLink } from "../../content";
import {
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle
} from "../../layout";
import { destructureNodes, featuredCategoryDelimiter } from "../../utils";

const componentFontSize: FontProperties["fontSize"] = "sm";

const StyledBlockFeaturedCategory = styled.div`
  ${makeInset({ horizontal: 24, top: 16, bottom: 28 })};
  background: ${makeColor({ fixed: "bright-green" })};

  h1,
  h3,
  h3,
  h4 {
    text-transform: capitalize;
  }

  & > p {
    ${makeRhythm({ fontSize: componentFontSize, top: 1, bottom: 1 })};
  }
`;

export const BlockFeaturedCategory: FC = () => {
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(
        filter: {
          name: { glob: "category-*" }
          description: { glob: "__FEATURE__*" }
        }
      ) {
        edges {
          node {
            slug
            name
            description
          }
        }
      }
    }
  `);

  const featuredCategories = destructureNodes(edges);

  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const cat: Tag = featuredCategories[0];

  return (
    <LayoutBlock>
      <LayoutBlockTitle title="Featured Category">
        <FrameworkLink to="/categories">
          <ButtonAction
            buttonSize="md"
            buttonColor={{ scalable: { color: "secondary", scale: 1 } }}
            icon="th"
            iconWeight="fad"
            title="View all categories"
          />
        </FrameworkLink>
      </LayoutBlockTitle>
      <LayoutBlockContent>
        <StyledBlockFeaturedCategory>
          <Heading fontSize="h3" fontColor={{ scalable: { color: "gray" } }}>
            {cat.name?.split("-")[1]}
          </Heading>
          <Typography variant="paragraph" fontSize={componentFontSize}>
            {cat.description?.split(featuredCategoryDelimiter)[1]}
          </Typography>
          <ButtonGroup layout={isWindowMobile ? "stacked-full" : "inline"}>
            <FrameworkLink to={`/categories/${cat.slug}`}>
              <Button styleType="secondary" label="Explore this category" />
            </FrameworkLink>
            <FrameworkLink to="/categories">
              <Button styleType="primary" label="View all categories" />
            </FrameworkLink>
          </ButtonGroup>
        </StyledBlockFeaturedCategory>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

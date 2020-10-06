import { Title } from "@heather-turano-coaching/components";
import {
  makeRem,
  makeRetinaStyles,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { Container, Typography } from "@material-ui/core";
import {
  BlogEntryCard,
  blogCardHorizontalSpacing
} from "components/content/blog/BlogEntryCard";
import { BlogFeaturedPost } from "components/content/blog/BlogFeaturedPost";
import { HeroPlain } from "components/content/heros";
import { getAllPosts } from "lib/ghost.api";
import {
  getAllGhostPostsEndpoint,
  getGhostEndpoint,
  getGhostFeaturedPost,
  getGhostFeaturedPostEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { formatShortDate } from "lib/utils";
import { BlogPageProps } from "pages/blog";
import React, { FC, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useSWR from "swr";

const BlogCardGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
  & > * {
    width: 100%;
  }

  ${({ theme }) => css`
    ${makeTabletStyles(theme)} {
      & > * {
        width: ${`calc(50% - ${makeRem(blogCardHorizontalSpacing * 2)})`};
      }
    }

    ${makeRetinaStyles(theme)} {
      & > * {
        width: ${`calc(33.33% - ${makeRem(blogCardHorizontalSpacing * 2)})`};
      }
    }
  `}
`;

export const PageBlog: FC<BlogPageProps> = ({
  data: { fields },
  featuredPosts,
  allPosts
}) => {
  const { data: allPostsLocal } = useSWR<typeof allPosts>(
    getAllGhostPostsEndpoint(1),
    ghostFetcher,
    {
      initialData: allPosts
    }
  );
  const { data: featuredPostsLocal } = useSWR<typeof featuredPosts>(
    getGhostFeaturedPostEndpoint,
    ghostFetcher,
    { initialData: featuredPosts }
  );

  return (
    <>
      <HeroPlain title={fields.heroTitle} subTitle={fields.heroSubtitle} />
      <Container
        css={css`
          box-sizing: border-box;

          * {
            box-sizing: border-box;
          }
        `}
      >
        <Title size="lg" copy="Featured post" />
        <BlogFeaturedPost {...featuredPostsLocal.posts[0]} />
        <Title size="lg" copy="Older Posts" />
        <BlogCardGrid>
          {allPostsLocal.posts.map((post) => (
            <BlogEntryCard {...post} key={post.id} />
          ))}
        </BlogCardGrid>
        {/* <button onClick={getMore}>get more</button> */}
      </Container>
    </>
  );
};

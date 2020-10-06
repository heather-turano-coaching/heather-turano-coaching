import { Title } from "@heather-turano-coaching/components";
import {
  makeRem,
  makeRetinaStyles,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { Container } from "@material-ui/core";
import {
  BlogEntryCard,
  blogCardSpacing
} from "components/content/blog/BlogEntryCard";
import { BlogFeaturedPost } from "components/content/blog/BlogFeaturedPost";
import { HeroPlain } from "components/content/heros";
import {
  GetAllGhostPosts,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { BlogPageProps } from "pages/blog";
import React, { FC, useCallback, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import useSWR, { useSWRInfinite } from "swr";

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
        width: ${`calc(50% - ${makeRem(blogCardSpacing * 2)})`};
      }
    }

    ${makeRetinaStyles(theme)} {
      & > * {
        width: ${`calc(33.33% - ${makeRem(blogCardSpacing * 2)})`};
      }
    }
  `}
`;

export const Page: FC<{
  pageNum: number;
  initialValues?: GetAllGhostPosts;
}> = ({ pageNum, initialValues }) => {
  const { data } = useSWR<GetAllGhostPosts>(
    getAllGhostPostsEndpoint(pageNum),
    ghostFetcher,
    {
      initialData: initialValues
    }
  );
  return (
    <>
      {data?.posts.map((post) => (
        <BlogEntryCard {...post} key={post.id} />
      ))}
    </>
  );
};

export const PageBlog: FC<BlogPageProps> = ({
  data: { fields },
  featuredPosts,
  allPosts
}) => {
  const { data: featuredPostsLocal } = useSWR<typeof featuredPosts>(
    getGhostFeaturedPostEndpoint,
    ghostFetcher,
    { initialData: featuredPosts }
  );

  const { data, size, setSize } = useSWRInfinite<typeof allPosts>(
    (index) => {
      return getAllGhostPostsEndpoint(index + 1);
    },
    ghostFetcher,
    {
      initialData: [allPosts]
    }
  );

  const isEmpty = data?.[0]?.posts.length === 0;
  const isReachingEnd = isEmpty || data[data.length - 1]?.posts.length < 6;

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
        {useMemo(
          () => (
            <>
              <Title size="lg" copy="Featured post" />
              <BlogFeaturedPost {...featuredPostsLocal.posts[0]} />
              <Title size="lg" copy="Older Posts" />
            </>
          ),
          []
        )}
        <BlogCardGrid>
          {data.map((page) =>
            page.posts.map((post) => <BlogEntryCard {...post} key={post.id} />)
          )}
        </BlogCardGrid>
        {!isReachingEnd && (
          <button onClick={async () => setSize(size + 1)}>load more</button>
        )}
      </Container>
    </>
  );
};

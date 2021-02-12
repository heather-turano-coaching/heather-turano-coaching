import { makeRem, makeRetinaStyles, makeTabletStyles } from "@htc/theme";
import { Button } from "@material-ui/core";
import {
  GetAllGhostPosts,
  getAllGhostPostsEndpoint,
  ghostFetcher
} from "lib/ghost/ghost.api";
import React, { FC, useCallback } from "react";
import styled, { css } from "styled-components";
import { useSWRInfinite } from "swr";

import { BlogCard, blogCardSpacing } from ".";

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

export const BlogCardList: FC<GetAllGhostPosts> = (posts) => {
  const { data, size, setSize } = useSWRInfinite<typeof posts>(
    (index) => {
      return getAllGhostPostsEndpoint(index + 1);
    },
    ghostFetcher,
    {
      initialData: [posts]
    }
  );

  const isEmpty = data?.[0]?.posts.length === 0;
  const isReachingEnd = isEmpty || data[data.length - 1]?.posts.length < 6;

  const loadMore = useCallback(() => {
    setSize(size + 1);
  }, []);

  return (
    <>
      <BlogCardGrid>
        {data.map((page) =>
          page.posts.map((post) => <BlogCard {...post} key={post.id} />)
        )}
      </BlogCardGrid>
      {!isReachingEnd && (
        <div
          css={css`
            margin: ${makeRem(48)} 0;
            text-align: center;
          `}
        >
          <Button variant="contained" color="primary" onClick={loadMore}>
            Load more posts
          </Button>
        </div>
      )}
    </>
  );
};

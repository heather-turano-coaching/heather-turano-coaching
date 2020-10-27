import { Button, Title } from "@heather-turano-coaching/core/components";
import {
  makeRem,
  makeRetinaStyles,
  makeTabletStyles
} from "@heather-turano-coaching/core/theme";
import { Container } from "@material-ui/core";
import { Hero, HeroPlain } from "components/content/heros";
import { IWebPage } from "lib/contentful";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  getGhostFeaturedPostEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { PageComponent } from "lib/page";
import React, { FC, useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import useSWR, { useSWRInfinite } from "swr";

import { LayoutRoot } from "../layout";
import {
  BlogCard,
  BlogFeaturedPost,
  blogCardSpacing,
  getBlogPageData
} from ".";

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
        <BlogCard {...post} key={post.id} />
      ))}
    </>
  );
};

export type BlogPageProps = {
  pageId: string;
  data: IWebPage;
  featuredPosts: GetFeaturedGhostPost;
  allPosts: GetAllGhostPosts;
};

export const BlogPage: PageComponent<BlogPageProps> = ({
  pageId,
  ...initialData
}) => {
  const {
    data: {
      data: {
        fields: {
          hero: { fields: heroFields }
        }
      },
      featuredPosts,
      allPosts
    }
  } = useSWR(`/${pageId}`, async () => getBlogPageData(), {
    initialData
  });

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

  const loadMore = useCallback(() => {
    setSize(size + 1);
  }, []);

  return (
    <>
      <Hero {...heroFields} />
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
              <BlogFeaturedPost {...featuredPosts.posts[0]} />
              <Title size="lg" copy="Older Posts" />
            </>
          ),
          []
        )}
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
            <Button
              onClick={loadMore}
              label="Load more posts"
              styleType="secondary"
            />
          </div>
        )}
      </Container>
    </>
  );
};

BlogPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

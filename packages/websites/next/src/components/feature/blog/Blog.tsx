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
import React, { FC, useCallback, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const { data: featuredPostsLocal } = useSWR<typeof featuredPosts>(
    getGhostFeaturedPostEndpoint,
    ghostFetcher,
    { initialData: featuredPosts }
  );
  const { data: allPostsLocal } = useSWR<typeof allPosts>(
    getAllGhostPostsEndpoint(currentPage),
    ghostFetcher,
    {
      initialData: allPosts
    }
  );

  const Pages = [<Page pageNum={1} initialValues={allPostsLocal} key={0} />];
  for (let i = 1; i < currentPage; i++) {
    Pages.push(<Page pageNum={i + 1} key={i + 1} />);
  }

  const loadMore = useCallback((nextPage: number) => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  }, []);

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
        <BlogCardGrid>{Pages}</BlogCardGrid>
        <button onClick={async () => loadMore(currentPage + 1)}>
          load more
        </button>
      </Container>
    </>
  );
};

import { Title } from "@heather-turano-coaching/core/components";
import { makeRem } from "@heather-turano-coaching/core/theme";
import { IWebPage } from "@heather-turano-coaching/domain";
import { Container } from "@material-ui/core";
import { Hero } from "components/content/heros";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { PageComponent } from "lib/page";
import React, { FC, useMemo } from "react";
import { css } from "styled-components";
import useSWR from "swr";

import { LayoutRoot } from "../layout";
import { BlogCardList } from "./BlogCardList";
import { BlogCard, BlogFeaturedPost, getBlogPageData } from ".";

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
              <div
                css={css`
                  margin-top: ${makeRem(200)};
                `}
              >
                <Title size="lg" copy="Older Posts" />
              </div>
            </>
          ),
          []
        )}
        <BlogCardList {...allPosts} />
      </Container>
    </>
  );
};

BlogPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

import { Title } from "@htc/components/atomic";
import { IWebPage } from "@htc/domain/contentful";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { Container } from "@material-ui/core";
import { Hero } from "components/content/heros";
import {
  GetAllGhostPosts,
  GetFeaturedGhostPost,
  getAllGhostPostsEndpoint,
  ghostFetcher
} from "lib/ghost/ghost.api";
import React, { FC, useMemo } from "react";
import { css } from "styled-components";
import useSWR from "swr";

import { LayoutRoot } from "../layout";
import { getBlogPageData } from "./blog.utils";
import { BlogCard } from "./BlogCard";
import { BlogCardList } from "./BlogCardList";
import { BlogFeaturedPost } from "./BlogFeaturedPost";

export const Page: FC<{
  pageNum: number;
  initialValues?: GetAllGhostPosts;
}> = ({ pageNum, initialValues }) => {
  const { data } = useSWR<GetAllGhostPosts>(
    getAllGhostPostsEndpoint({
      page: pageNum
    }),
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

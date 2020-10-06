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
import { formatShortDate } from "lib/utils";
import { BlogPageProps } from "pages/blog";
import React, { FC } from "react";
import styled, { css } from "styled-components";

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
  featuredPost,
  allPosts
}) => {
  console.log(allPosts);
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
        <BlogFeaturedPost {...featuredPost} />
        <Title size="lg" copy="Older Posts" />
        <BlogCardGrid>
          {allPosts.map((post) => (
            <BlogEntryCard {...post} key={post.id} />
          ))}
        </BlogCardGrid>
      </Container>
    </>
  );
};

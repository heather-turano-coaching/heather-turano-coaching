import { Tag, TagGroup, Title } from "@heather-turano-coaching/components";
import {
  makeDesktopStyles,
  makeFlex,
  makeRem
} from "@heather-turano-coaching/core/theme";
import { Container, Typography } from "@material-ui/core";
import { BlogFeaturedPost } from "components/content/blog/BlogFeaturedPost";
import { HeroPlain } from "components/content/heros";
import { CSSImageBorder } from "components/styles";
import { formatShortDate } from "lib/utils";
import Link from "next/link";
import { BlogPageProps } from "pages/blog";
import React, { FC } from "react";
import { css } from "styled-components";

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
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            box-sizing: border-box;

            * {
              box-sizing: border-box;
            }
            & > * {
              width: ${`calc(33.33% - ${makeRem(48)})`};
            }
          `}
        >
          {allPosts.map((post) => (
            <div
              css={css`
                margin: ${makeRem(48)} ${makeRem(24)};
                box-shadow: 0 0 10px 3px rgba(207, 207, 207, 0.5);
                border-radius: ${makeRem(4)};
                overflow: hidden;
                display: flex;
                flex-direction: column;
              `}
            >
              <img
                src={post.feature_image}
                alt={post.slug}
                css={css`
                  height: ${makeRem(300)};
                  display: block;
                  background-color: ${({ theme }) => theme.palette.light.light};
                `}
              />
              <div
                css={css`
                  padding: ${makeRem(16)};
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                `}
              >
                <Typography variant="caption">
                  {formatShortDate(post.published_at)}
                </Typography>
                <Typography variant="h5">{post.title}</Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  css={css`
                    margin-bottom: ${makeRem(28)} !important;
                    flex: 1;
                  `}
                >
                  {post.excerpt}
                </Typography>
              </div>
              <div
                css={css`
                  border-top: 1px solid
                    ${({ theme }) => theme.palette.light.light};
                  height: ${makeRem(60)};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <div>test1</div>
                &nbsp; &nbsp; &nbsp;
                <div>test2</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

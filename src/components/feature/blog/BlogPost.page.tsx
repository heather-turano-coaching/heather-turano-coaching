import { TextStylesBlog, Title } from "@htc/components/atomic";
import { CSSImageBorder } from "@htc/components/styles";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostClient
} from "@htc/lib/ghost";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { formatLongDate } from "@htc/utils";
import { Container, Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import React from "react";
import { css } from "styled-components";
import useSWR from "swr";

import { LayoutRoot } from "../layout";

export type BlogPostPageProps = {
  post: PostOrPage;
  slug: string;
};

export const BlogPostPage: PageComponent<BlogPostPageProps> = (props) => {
  const { data } = useSWR<GetSingleGhostPostBySlug>(
    getSingleGhostPostBySlugEndpoint(props.post.slug),
    ghostClient,
    { initialData: { posts: [props.post] } }
  );

  const localPost = data?.posts[0];

  if (!localPost?.published_at) {
    return null;
  }

  return (
    <>
      <Container>
        <div
          css={css`
            margin-top: ${makeRem(40)};
            & > * {
              font-weight: 400 !important;
            }
          `}
        >
          <Title size="sm">{formatLongDate(localPost.published_at)}</Title>
        </div>
        <div
          css={css`
            text-align: center;
          `}
        >
          <header
            css={css`
              margin: ${makeRem(80)} auto;
            `}
          >
            <Typography
              variant="h2"
              component="h1"
              css={css`
                max-width: ${makeRem(640)};
                && {
                  margin-left: auto;
                  margin-right: auto;
                }
              `}
            >
              {localPost.title}
            </Typography>
            <Typography
              variant="subtitle2"
              css={css`
                && {
                  margin-left: auto;
                  margin-right: auto;
                  max-width: ${makeRem(976)};
                  line-height: 2;
                }
              `}
            >
              {localPost.excerpt}
            </Typography>
          </header>
        </div>
      </Container>

      <img
        src={localPost.feature_image as string | undefined}
        alt="hero"
        css={css`
          width: 100%;
          margin-bottom: ${makeRem(64)};
          max-height: 80vh;
          object-fit: cover;
          object-position: top;
          ${CSSImageBorder};
          margin-left: auto;
          margin-right: auto;
          display: block;
          max-width: ${makeRem(1400)};
        `}
      />
      <Container>
        <section
          css={css`
            max-width: ${makeRem(680)};
            margin: 0 auto;
          `}
        >
          {typeof localPost.html === "string" && (
            <TextStylesBlog
              dangerouslySetInnerHTML={{ __html: localPost.html }}
            />
          )}
        </section>

        {/* <Divider />
        <Avatar
          alt={localPost.primary_author.name}
          src={localPost.primary_author.profile_image}
          css={css`
            && {
              margin-top: ${makeRem(48)};
              margin-bottom: ${makeRem(48)};
              height: ${makeRem(280)};
              width: ${makeRem(280)};
            }
          `}
        /> */}
      </Container>
    </>
  );
};

BlogPostPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};

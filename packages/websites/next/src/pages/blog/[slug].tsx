import { Title } from "@heather-turano-coaching/components";
import { makeRem } from "@heather-turano-coaching/core/theme";
import { Avatar, Container, Divider, Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import { CSSImageBorder } from "components/styles";
import { getEndpoint } from "lib/endpoint.utils";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostFetcher
} from "lib/ghost.api";
import { formatLongDate } from "lib/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import styled, { css } from "styled-components";
import useSWR from "swr";

const StyledContent = styled.div`
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  margin: ${makeRem(16 * 7)} 0;
  font-family: "Muli";
  font-size: ${makeRem(16)};
  line-height: ${makeRem(16 * 2)};

  & > p {
    &:first-of-type {
      margin-top: ${makeRem(16 * 7)};

      &::first-letter {
        float: left;
        font-family: Georgia;
        font-size: ${makeRem(120)};
        line-height: ${makeRem(88)};
        margin-top: -${makeRem(32)};
        padding-right: ${makeRem(16)};
      }
    }
  }

  p {
    font-family: "Muli";
    font-size: ${makeRem(16)};
    line-height: ${makeRem(16 * 2)};

    & + p {
      margin-top: ${makeRem(16 * 2)};
    }
  }

  h1 {
    ${({ theme }) => css`
      font-size: ${theme.typography.h3.fontSize};
      font-family: ${theme.typography.h3.fontFamily};
      font-weight: ${theme.typography.h3.fontWeight};
    `};
    margin-top: ${makeRem(16 * 5)};
    margin-bottom: ${makeRem(16 * 2)};
  }

  h2 {
    ${({ theme }) => css`
      font-size: ${theme.typography.h4.fontSize};
      font-family: ${theme.typography.h4.fontFamily};
      font-weight: ${theme.typography.h4.fontWeight};
    `};
    margin-top: ${makeRem(16 * 3)};
    margin-bottom: ${makeRem(16 * 1)};
  }

  ul,
  ol {
    margin-top: ${makeRem(16)};
    margin-bottom: ${makeRem(16 * 3)};
    margin-left: ${makeRem(16 * 3)};

    li {
      padding: 0 ${makeRem(16)};

      & + li {
        margin-top: ${makeRem(4)};
      }
    }
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  blockquote {
    margin: ${makeRem(48)} ${makeRem(32)};
    background: ${({ theme }) => theme.palette.light.light};
    padding: ${makeRem(40)} ${makeRem(40)};
    font-weight: 500;
    font-size: ${makeRem(18)};
    box-shadow: 0 0 16px 8px rgba(219, 219, 219, 0.5);
  }

  figure {
    width: 100%;
    padding: 0;
    margin: ${makeRem(24)} 0;

    figcaption {
      text-align: center;
      padding: ${makeRem(4)};
      ${({ theme }) => css`
        font-size: ${theme.typography.caption.fontSize};
        font-family: ${theme.typography.caption.fontFamily};
        background: ${theme.palette.light.light};
      `};
    }
  }

  img {
    display: block;
    width: 100%;
  }
`;

export default function BlogPostPage(post: PostOrPage): ReactElement {
  const {
    data: {
      posts: [localPost]
    }
  } = useSWR<GetSingleGhostPostBySlug>(
    getSingleGhostPostBySlugEndpoint(post.slug),
    ghostFetcher,
    { initialData: { posts: [post] } }
  );

  if (!localPost.published_at) {
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
        src={localPost.feature_image}
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
          <StyledContent dangerouslySetInnerHTML={{ __html: localPost.html }} />
        </section>

        <Divider />
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
        />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<PostOrPage> = async context => {
  const slug = context.params.slug as string;

  const post = await ghostFetcher<GetSingleGhostPostBySlug>(
    getSingleGhostPostBySlugEndpoint(slug)
  );

  return { props: post.posts[0] };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const allSlugs = await ghostFetcher<{ posts: { slug: string }[] }>(
    getEndpoint({
      root: "/posts",
      queryParams: {
        fields: "slug"
      }
    })
  );

  return {
    fallback: true,
    paths: allSlugs.posts.map(slug => ({
      params: slug
    }))
  };
};

import {
  SectionCopy,
  SectionFooter,
  TextStylesBlog,
  Title
} from "@htc-website/components";
import {
  theme.breakpoints.laptop,
  theme.breakpoints.mobileOnly,
  theme.size.makeRem
} from "@htc-website/components";
import {
  BlockSimpleVariant,
  BlogCardSuggested
} from "@htc-website/components/content";
import { CSSImageBorder } from "@htc-website/components/styles";
import { FeaturePageComponent, PageProps } from "@htc-website/features/page";
import { GhostSeo } from "@htc-website/features/seo";
import {
  GetSingleGhostPostBySlug,
  getSingleGhostPostBySlugEndpoint,
  ghostClient
} from "@htc-website/lib/ghost";
import { formatLongDate } from "@htc-website/utils";
import { Container, Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import Link from "next/link";
import React from "react";
import { css } from "styled-components";
import useSWR from "swr";

import { SubscribeForm } from "../subscribe";
import { withBlogPostPageLayout } from "./BlogPost.layout";

export type BlogPostPageProps = PageProps<{
  post: PostOrPage;
  slug: string;
  suggestedBlogPosts: PostOrPage[];
}>;

export const BlogPostPage: FeaturePageComponent<BlogPostPageProps> = (
  props
) => {
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
      <GhostSeo {...props} />
      <Container>
        <div
          css={css`
            margin-top: ${theme.size.makeRem(40)};
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
              margin: ${theme.size.makeRem(80)} auto;
            `}
          >
            <Typography
              variant="h2"
              component="h1"
              css={css`
                max-width: ${theme.size.makeRem(640)};
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
                  max-width: ${theme.size.makeRem(976)};
                  line-height: 2;
                }
              `}
            >
              {localPost.custom_excerpt}
            </Typography>
          </header>
        </div>
      </Container>

      <img
        src={localPost.feature_image as string | undefined}
        alt="hero"
        css={css`
          width: 100%;
          margin-bottom: ${theme.size.makeRem(64)};
          max-height: 80vh;
          object-fit: cover;
          object-position: top;
          ${CSSImageBorder};
          margin-left: auto;
          margin-right: auto;
          display: block;
          max-width: ${theme.size.makeRem(1400)};
        `}
      />
      <Container>
        <section
          css={css`
            max-width: ${theme.size.makeRem(680)};
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
              margin-top: ${theme.size.makeRem(48)};
              margin-bottom: ${theme.size.makeRem(48)};
              height: ${theme.size.makeRem(280)};
              width: ${theme.size.makeRem(280)};
            }
          `}
        /> */}
      </Container>
      <div
        css={css`
          ${({ theme }) => css`
            background: ${theme.palette.accent.light};

            ${theme.breakpoints.mobileOnly} {
              padding-top: ${theme.size.makeRem(32)};
              padding-bottom: ${theme.size.makeRem(32)};
            }
          `}
        `}
      >
        <BlockSimpleVariant variant="plain">
          <Title size="md">Let&apos;s stay in touch</Title>
          <SectionCopy>
            <Typography
              css={css`
                && {
                  text-align: center;
                }
              `}
            >
              Want to hear more? Enter your email to keep up-to-date on new blog
              posts and life tips.
            </Typography>
          </SectionCopy>
          <SectionFooter>
            <div
              css={css`
                max-width: ${theme.size.makeRem(400)};
                margin: 0 auto;
              `}
            >
              <SubscribeForm />
            </div>
          </SectionFooter>
        </BlockSimpleVariant>
      </div>
      <BlockSimpleVariant variant="plain">
        <Title size="md">You might be interested in...</Title>
        {/* <SectionCopy>
          <Typography
            css={css`
              && {
                text-align: center;
              }
            `}
          >
            Based upon this article, we suggest the below for some more expanded
            readings...
          </Typography>
        </SectionCopy> */}
        <ul
          css={css`
            ${({ theme }) => css`
              ${theme.breakpoints.laptop} {
                display: flex;
                justify-content: center;
              }
            `}
          `}
        >
          {props.suggestedBlogPosts?.map((blogPost) => (
            <li key={blogPost.id}>
              <Link href={`/blog/${blogPost.slug}`} passHref>
                <a
                  css={css`
                    ${({ theme }) => css`
                      ${theme.breakpoints.mobileOnly} {
                        display: flex;
                        justify-content: center;
                      }
                    `}
                  `}
                >
                  <BlogCardSuggested {...blogPost} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </BlockSimpleVariant>
    </>
  );
};

BlogPostPage.withPageLayout = withBlogPostPageLayout;

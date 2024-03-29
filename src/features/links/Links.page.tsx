import { IPageCollection } from "@htc/lib/server/contentful";
import { makeRem } from "@htc/theme";
import { PostOrPage } from "@tryghost/content-api";
import { NextSeo } from "next-seo";
import React from "react";
import { css } from "styled-components";

import { FeaturePageComponent } from "../page";
import { BasicLinkCard } from "./BasicLinkCard";
import { BlogLinkCard } from "./BlogLinkCard";
import { withLinksPageLayout } from "./Links.layout";

export type LinksPageProps = {
  contentfulData: IPageCollection;
  featuredPost: PostOrPage | null;
  latestPost: PostOrPage | null;
};

export const LinksPage: FeaturePageComponent<LinksPageProps> = ({
  contentfulData,
  featuredPost,
  latestPost
}) => {
  return (
    <>
      <NextSeo
        title={contentfulData.fields.seo?.fields.title}
        description={contentfulData.fields.seo?.fields.description}
        nofollow
        noindex
      />
      <div
        css={css`
          ${({ theme }) => css`
            background-color: ${theme.palette.light.main};
          `}
          padding-top: ${makeRem(28)};
          padding-bottom: ${makeRem(28)};
          padding-left: ${makeRem(16)};
          padding-right: ${makeRem(16)};
        `}
      >
        {contentfulData.fields.items.map(({ fields }) => {
          if (!fields) {
            return null;
          }

          if (
            fields.cardType === "card-important" ||
            fields.cardType === "card-regular"
          ) {
            return (
              <BasicLinkCard
                title={fields.title}
                subTitle={fields.subTitle}
                href={fields.link}
                important={fields.cardType === "card-important"}
              />
            );
          }
          if (fields.cardType === "blog-featured-post" && featuredPost) {
            return (
              <BlogLinkCard
                title={featuredPost.title as string}
                subTitle={
                  featuredPost.excerpt
                    ? featuredPost.excerpt.substr(0, 180)
                    : undefined
                }
                href={`/blog/${featuredPost.slug}`}
                src={featuredPost.feature_image as string}
                alt={featuredPost.published_at as string}
                overline="featured post"
              />
            );
          }
          if (fields.cardType === "blog-latest-post" && latestPost) {
            return (
              <BlogLinkCard
                title={latestPost.title as string}
                subTitle={
                  latestPost.excerpt
                    ? latestPost.excerpt.substr(0, 180)
                    : undefined
                }
                href={`/blog/${latestPost.slug}`}
                src={latestPost.feature_image as string}
                alt={latestPost.published_at as string}
                overline="latest post"
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

LinksPage.withPageLayout = withLinksPageLayout;

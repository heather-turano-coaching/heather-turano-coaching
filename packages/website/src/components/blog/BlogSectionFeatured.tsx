import { Tag, TagGroup } from "@htc-website/components";
import { theme.breakpoints.laptop, makeFlex, theme.size.makeRem } from "@htc-website/components";
import { CSSImageBorder } from "@htc-website/components/styles";
import { formatShortDate } from "@htc-website/utils";
import { Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import Link from "next/link";
import React, { FC } from "react";
import { css } from "styled-components";

export const BlogSectionFeatured: FC<PostOrPage> = (featuredPost) => {
  return (
    <div
      css={css`
        ${({ theme }) => css`
          ${theme.breakpoints.laptop} {
            min-height: ${theme.size.makeRem(600)};
            height: ${theme.size.makeRem(600)};
            padding: 0 ${theme.size.makeRem(48)};
            ${makeFlex({
              direction: "row",
              justify: "space-evenly",
              align: "center"
            })};
            margin-bottom: ${theme.size.makeRem(100)};

            img {
              margin-right: ${theme.size.makeRem(40)};
            }
          }
        `}
      `}
    >
      <Link href="/blog/[slug]" as={`/blog/${featuredPost.slug}`}>
        <a
          css={css`
            flex: 1;
            ${({ theme }) => css`
              ${theme.breakpoints.laptop} {
                margin-right: ${theme.size.makeRem(40)};
                height: 100%;
                position: relative;

                &::before {
                  content: "";
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  display: block;
                  left: -${theme.size.makeRem(10)};
                  bottom: -${theme.size.makeRem(10)};
                  z-index: -1;
                  border-radius: ${theme.size.makeRem(4)};
                  background-color: ${({ theme }) =>
                    theme.palette.primary.light};
                }
              }
            `}
          `}
        >
          <img
            alt="featured-imge"
            src={featuredPost.feature_image as string | undefined}
            css={css`
              width: 100%;
              border-radius: ${theme.size.makeRem(4)};
              object-fit: cover;
              height: 100%;
              ${CSSImageBorder};
            `}
          />
        </a>
      </Link>

      <div
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: ${theme.size.makeRem(16)} 0;
        `}
      >
        {featuredPost.published_at && (
          <Typography variant="body2" component="div">
            {formatShortDate(featuredPost.published_at)}
          </Typography>
        )}

        <Typography
          variant="h3"
          css={css`
            margin-bottom: ${theme.size.makeRem(24)} !important;
          `}
        >
          {featuredPost.title}
        </Typography>
        <div
          css={css`
            flex: 1;
          `}
        >
          <Typography
            variant="subtitle2"
            css={css`
              margin-bottom: ${theme.size.makeRem(48)} !important;
            `}
          >
            {featuredPost.custom_excerpt || featuredPost.excerpt}
          </Typography>
        </div>
        <TagGroup>
          {featuredPost?.tags?.map(
            (tag) =>
              tag.name && (
                <Link
                  href={"/blog/tag/[slug]"}
                  as={`/blog/tag/${tag.slug}`}
                  key={tag.id}
                >
                  <a>
                    <Tag text={tag.name} key={tag.id} />
                  </a>
                </Link>
              )
          )}
        </TagGroup>
      </div>
    </div>
  );
};

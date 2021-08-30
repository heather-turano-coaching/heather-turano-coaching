import { Tag, TagGroup } from "@htc/components/atomic";
import { CSSImageBorder } from "@htc/components/styles";
import { makeDesktopStyles, makeFlex, makeRem } from "@htc/theme";
import { formatShortDate } from "@htc/utils";
import { Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import Link from "next/link";
import React, { FC } from "react";
import { css } from "styled-components";

export const BlogSectionFeatured: FC<PostOrPage> = (featuredPost) => {
  console.log(featuredPost);
  return (
    <div
      css={css`
        ${({ theme }) => css`
          ${makeDesktopStyles(theme)} {
            min-height: ${makeRem(600)};
            height: ${makeRem(600)};
            padding: 0 ${makeRem(48)};
            ${makeFlex({
              direction: "row",
              justify: "space-evenly",
              align: "center"
            })};
            margin-bottom: ${makeRem(100)};

            img {
              margin-right: ${makeRem(40)};
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
              ${makeDesktopStyles(theme)} {
                margin-right: ${makeRem(40)};
                height: 100%;
                position: relative;

                &::before {
                  content: "";
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  display: block;
                  left: -${makeRem(10)};
                  bottom: -${makeRem(10)};
                  z-index: -1;
                  border-radius: ${makeRem(4)};
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
              border-radius: ${makeRem(4)};
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
          padding: ${makeRem(16)} 0;
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
            margin-bottom: ${makeRem(24)} !important;
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
              margin-bottom: ${makeRem(48)} !important;
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

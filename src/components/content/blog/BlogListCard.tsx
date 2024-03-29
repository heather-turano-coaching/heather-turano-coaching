import { Clock } from "@htc/icons";
import { makeRem, makeTabletStyles } from "@htc/theme";
import { formatShortDate } from "@htc/utils";
import { SvgIcon, Typography } from "@material-ui/core";
import { PostOrPage } from "@tryghost/content-api";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { FC, memo } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

export const blogCardSpacing = 24;
const blogCardSidePadding = 24;

const StyledIcon = styled(SvgIcon)`
  &:not(:first-child) {
    margin-left: ${makeRem(24)};
  }
`;

const StyledIconText = styled(Typography)`
  && {
    margin-left: ${makeRem(8)};
  }
`;

export const BlogListCard: FC<PostOrPage & { index: number }> = memo(
  function BlogListCard({ index, ...post }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
        css={css`
          box-shadow: 0 0 10px 3px rgba(207, 207, 207, 0.5);
          border-radius: ${makeRem(4)};
          overflow: hidden;
          display: flex;
          flex-direction: column;
        `}
      >
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`} legacyBehavior>
          <a
            css={css`
              width: 100%;
            `}
          >
            <img
              src={post.feature_image as unknown as string | undefined}
              alt={post.slug}
              css={css`
                width: 100%;
                height: ${makeRem(300)};
                display: block;
                background-color: ${({ theme }) => theme.palette.light.light};
                object-fit: cover;
                object-position: top left;

                ${({ theme }) => css`
                  ${makeTabletStyles(theme)} {
                    height: ${makeRem(400)};
                  }
                `}
              `}
            />
          </a>
        </Link>
        <div
          css={css`
            padding: ${makeRem(blogCardSidePadding)};
            flex: 1;
            display: flex;
            flex-direction: column;
          `}
        >
          {post.published_at && (
            <Typography variant="caption">
              {formatShortDate(post.published_at)}
            </Typography>
          )}

          <Link href="/blog/[slug]" as={`/blog/${post.slug}`} legacyBehavior>
            <a>
              <Typography variant="h5">{post.title}</Typography>
            </a>
          </Link>
          <Typography
            variant="body2"
            color="textPrimary"
            css={css`
              margin-bottom: ${makeRem(28)} !important;
              flex: 1;
              font-size: ${makeRem(16)} !important;
            `}
          >
            {post.custom_excerpt || post.excerpt}
          </Typography>
        </div>
        <div
          css={css`
            border-top: 1px solid ${({ theme }) => theme.palette.light.main};
            height: ${makeRem(60)};
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 ${makeRem(blogCardSidePadding)};

            & > * {
              display: flex;
              align-items: center;
              line-height: ${makeRem(60)};
            }
          `}
        >
          <div>
            {/* <StyledIcon fontSize="small" color="primary">
              <MessageSquare />
            </StyledIcon>
            <StyledIconText variant="overline">0</StyledIconText>
            <StyledIcon fontSize="small" color="secondary">
              <Heart />
            </StyledIcon>
            <StyledIconText variant="overline">0</StyledIconText> */}
            <StyledIcon fontSize="small" color="action">
              <Clock />
            </StyledIcon>
            <StyledIconText variant="overline">
              {post.reading_time} min
            </StyledIconText>
          </div>
          <div>
            {/* <StyledIcon fontSize="small">
              <Share2 />
            </StyledIcon> */}
          </div>
        </div>
      </motion.div>
    );
  }
);

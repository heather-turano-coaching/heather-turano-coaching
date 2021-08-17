import { BlogPostPageProps } from "@htc/features/blog-post";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

type PostMeta = string | undefined;

export const GhostSeo: FC<BlogPostPageProps> = (props) => {
  return (
    <NextSeo
      title={(props.post.meta_title as PostMeta) || props.post.title}
      description={
        (props.post.meta_description as PostMeta) || props.post.custom_excerpt
      }
    />
  );
};

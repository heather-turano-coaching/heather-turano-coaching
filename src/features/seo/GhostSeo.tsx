import { NextSeo } from "next-seo";
import React, { FC } from "react";

import { BlogPostPageProps } from "../blog";

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

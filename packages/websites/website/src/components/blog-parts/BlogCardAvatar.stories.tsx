import React from "react";

import { BlogCardAvatar } from "./BlogCardAvatar";

import { blogAuthor, blogMeta } from "../../.storybook/contants";

export default {
  component: BlogCardAvatar,
  title: "Blog|Avatar"
};

export const stacked = () => (
  <BlogCardAvatar layoutType="stacked" {...blogMeta} {...blogAuthor} />
);

export const inline = () => (
  <BlogCardAvatar layoutType="inline" {...blogMeta} {...blogAuthor} />
);

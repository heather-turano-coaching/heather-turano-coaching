import { GetAllGhostPosts } from "@htc/lib/ghost";
import React, { FC } from "react";

import { BlogList } from "./BlogList";

export const BlogSectionAll: FC<GetAllGhostPosts> = (posts) => {
  // ADD INIFINITE HERE WITH REF
  return <BlogList posts={posts.posts} />;
};

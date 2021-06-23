import React, { FC } from "react";
import { GetAllPostsApiResponse } from "src/models/blog.model";

import { useInfiniteBlogs } from "./blog.useInfiniteBlogs";
import { BlogList } from "./BlogList";

export const BlogSectionAll: FC<GetAllPostsApiResponse> = (props) => {
  const { containerRef, blogPosts, loading } = useInfiniteBlogs(props);

  return <BlogList posts={blogPosts} ref={containerRef} loading={loading} />;
};

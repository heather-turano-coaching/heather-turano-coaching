import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { BlogPost } from "./BlogCardRegular";

interface BlogPostListProps {
  posts: PostOrPage[];
}

export const BlogPostList: FC<BlogPostListProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <BlogPost key={post.id} blogType="regular" post={post} />
    ))}
  </>
);

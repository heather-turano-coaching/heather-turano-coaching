import { Button } from "@heather-turano-coaching/components";
import React, { FC } from "react";

export const LoadMorePostsButton: FC<{ loadMorePosts: () => void }> = ({
  loadMorePosts
}) => (
  <Button label="Load more posts" onClick={loadMorePosts} styleType="primary" />
);

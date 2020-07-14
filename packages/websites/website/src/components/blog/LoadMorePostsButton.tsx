import React, { FC } from "react";

import { Button } from "@heather-turano-coaching/components";

export const LoadMorePostsButton: FC<{ loadMorePosts: () => void }> = ({
  loadMorePosts
}) => (
  <Button label="Load more posts" onClick={loadMorePosts} styleType="primary" />
);

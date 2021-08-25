import { PostOrPage } from "@tryghost/content-api";
import { FC } from "react";

export const BlogSuggestedCard: FC<PostOrPage> = (props) => {
  return <div>{props.title}</div>;
};

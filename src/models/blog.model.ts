import { Pagination, PostOrPage } from "@tryghost/content-api";

export type GhostPagination = { pagination: Pagination };
export type Posts = PostOrPage;

export type GetAllPostsApiResponse = {
  posts: Posts[];
  meta: GhostPagination;
};

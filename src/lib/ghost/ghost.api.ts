import { Pagination, PostOrPage } from "@tryghost/content-api";
import axios, { AxiosRequestConfig } from "axios";

import { getEndpoint } from "../endpoint";

// const ghostApi = new GhostContentAPI({
//   url: process.env.NEXT_PUBLIC_HTC_GHOST_API_URL as string,
//   key: process.env.NEXT_PUBLIC_HTC_GHOST_API_CONTENT_KEY,
//   version: process.env.NEXT_PUBLIC_HTC_GHOST_API_CONTENT_VERSION as GhostContentAPIOptions["version"]
// });

export const ghostApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HTC_GHOST_API_URL}/ghost/api/${process.env.NEXT_PUBLIC_HTC_GHOST_API_CONTENT_VERSION}/content`,
  responseType: "json"
});

ghostApi.interceptors.request.use(
  async (config): Promise<AxiosRequestConfig> => {
    if (config.url?.includes("?")) {
      config.url = `${config.url}&key=${process.env.NEXT_PUBLIC_HTC_GHOST_API_CONTENT_KEY}`;
    } else {
      config.url = `${config.url}?key=${process.env.NEXT_PUBLIC_HTC_GHOST_API_CONTENT_KEY}`;
    }
    return config;
  }
);

export const ghostClient = async <TData>(url: string): Promise<TData> =>
  ghostApi.get<TData>(url).then((res) => res.data);

/**
 * Types
 */
export type GhostMeta = { meta: { pagination: Pagination } };
export type GetAllGhostPosts = {
  posts: PostOrPage[];
} & GhostMeta;
export type GetFeaturedGhostPost = {
  posts: PostOrPage[];
} & GhostMeta;
export type GetLatestGhostPost = {
  posts: PostOrPage[];
} & GhostMeta;
export type GetSingleGhostPostBySlug = { posts: [PostOrPage] };

/**
 * Endpoints
 */
export const getGhostLatestPostEndpoint = getEndpoint({
  root: "/posts",
  queryParams: {
    include: "1",
    order: "published_at DESC"
  }
});

export const getGhostFeaturedPostEndpoint = getEndpoint({
  root: "/posts",
  queryParams: {
    include: "tags,authors",
    filter: "featured:true"
  }
});

export const getAllGhostPostsEndpoint = ({ page }: { page: number }): string =>
  getEndpoint({
    root: "/posts",
    queryParams: {
      include: "tags,authors",
      filter: "featured:-true",
      limit: 6,
      page
    }
  });

export const getSingleGhostPostBySlugEndpoint = (slug: string): string =>
  getEndpoint({
    root: "/posts/slug",
    dynamic: slug,
    queryParams: {
      include: "tags,authors"
    }
  });

export const getAllGhostPostsByTagSlugEndpoint = (slug: string): string =>
  getEndpoint({
    root: "/posts",
    queryParams: {
      filter: `tag:${slug}`
    }
  });

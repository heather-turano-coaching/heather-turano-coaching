import { Pagination, PostOrPage } from "@tryghost/content-api";
import axios, { AxiosRequestConfig } from "axios";

import { getEndpoint } from "./endpoint.utils";

const ghostApiVersion = "v3";

export const ghostApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/${ghostApiVersion}/content`,
  responseType: "json"
});

ghostApi.interceptors.request.use(
  async (config): Promise<AxiosRequestConfig> => {
    if (config.url.includes("?")) {
      config.url = `${config.url}&key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}`;
    } else {
      config.url = `${config.url}?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}`;
    }
    return config;
  }
);

export const ghostFetcher = async <TData>(url: string): Promise<TData> =>
  ghostApi.get<TData>(url).then(res => res.data);

/**
 * Types
 */
export type GhostMeta = { meta: { pagination: Pagination } };
export type GetAllGhostPosts = {
  posts: PostOrPage[];
} & GhostMeta;
export type GetFeaturedGhostPost = { posts: [PostOrPage] } & GhostMeta;
export type GetSingleGhostPostBySlug = { posts: [PostOrPage] };

/**
 * Endpoints
 */
export const getGhostFeaturedPostEndpoint = getEndpoint({
  root: "/posts",
  queryParams: {
    include: "tags,authors",
    filter: "featured:true"
  }
});

export const getAllGhostPostsEndpoint = (page = 1): string =>
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

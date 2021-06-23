import { getEndpoint } from "@htc/lib/endpoint";
import { GetAllGhostPosts } from "@htc/lib/ghost";
import axios, { AxiosRequestConfig } from "axios";
import { NextApiHandler } from "next";

const ghostApiVersion = "v3";

export const ghostApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HTC_GHOST_API_URL}/ghost/api/${ghostApiVersion}/content`,
  responseType: "json"
});

ghostApi.interceptors.request.use(
  async (config): Promise<AxiosRequestConfig> => {
    if (config.url?.includes("?")) {
      config.url = `${config.url}&key=${process.env.NEXT_PUBLIC_HTC_GHOST_CONTENT_API_KEY}`;
    } else {
      config.url = `${config.url}?key=${process.env.NEXT_PUBLIC_HTC_GHOST_CONTENT_API_KEY}`;
    }
    return config;
  }
);

const posts: NextApiHandler = async (req, res) => {
  try {
    const { data } = await ghostApi.get<GetAllGhostPosts>(
      getEndpoint({
        root: "/posts",
        queryParams: {
          include: "tags,authors",
          filter: "featured:-true",
          limit: 6,
          page: req.query.page || 1
        }
      })
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default posts;

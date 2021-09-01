import { throwApiError, validateMethod } from "@htc-website/lib/server";
import {
  IWebPage,
  getContentfulEntriesById
} from "@htc-website/lib/server/contentful";
import { ContentfulPagination } from "@htc-website/lib/server/contentful/contentful.types.custom";
import { NextApiHandler } from "next";

const getAllPages: NextApiHandler<ContentfulPagination<IWebPage>> = async (
  req,
  res
) => {
  if (req.method !== "GET") {
    res.status(500).json;
  }
  try {
    const entires = await getContentfulEntriesById<IWebPage>("webPage", {
      preview: req.preview || false
    });
    res.status(200).json(entires);
  } catch (error) {
    throwApiError({
      message: "Something done gone wrong",
      status: "SERVER_ERROR",
      res
    });
  }
};

export default validateMethod(["GET"], getAllPages);

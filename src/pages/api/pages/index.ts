import { IWebPage, getContentfulEntriesById } from "@htc/lib/contentful";
import { ContentfulPagination } from "@htc/lib/contentful/contentful.types.custom";
import { throwApiError, validateMethod } from "@htc/lib/server";
import { NextApiHandler } from "next";

const getAllPages: NextApiHandler<ContentfulPagination<IWebPage>> = async (
  req,
  res
) => {
  if (req.method !== "GET") {
    res.status(500).json;
  }
  try {
    const entires = await getContentfulEntriesById<IWebPage>("webPage");
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

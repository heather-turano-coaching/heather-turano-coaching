import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { throwApiError } from "./throwApiError";

type RequestMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const validateMethod =
  (method: RequestMethods[], fn: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && method.includes(req.method as RequestMethods)) {
      return await fn(req, res);
    }
    throwApiError({
      message: `${method} is not allowed.`,
      status: "NOT_ALLOWED",
      res
    });
  };

import { ServiceError } from "./ServiceError";

export const isDev = process.env.NODE_ENV === "development";

// Allow everything and validate the origin at the request level
export const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Content-Type": "application/json",
  Connection: "keep-alive",
  "Access-Control-Allow-Headers": "Content-Type"
};

export const parseRequestBody = async <RequestBody>(
  request: Request
): Promise<RequestBody> => {
  try {
    const body = await request.json();
    return body;
  } catch (error) {
    throw new ServiceError(
      "SERVER ERROR",
      "Error trying to parse request body. Check to make sure that you are sending a proper request",
      error
    );
  }
};

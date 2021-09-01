import { convertParamsToQueryString } from "@htc-website/utils";
import { Params } from "@tryghost/content-api";

type ApiRoutes =
  | "/posts"
  | "/posts/slug"
  | "/tags"
  | "/tags/slug"
  | "/events"
  | "/navigation/side"
  | "/pages";

export const parseDynamic = (
  dynamic: string | number | (string | number)[]
): string => {
  if (typeof dynamic === "string" || typeof dynamic === "number") {
    return dynamic?.toString();
  }
  return dynamic.join("/");
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type GetEndpoint<QP = Record<string, unknown>> = <QueryParams = QP>(params: {
  root: ApiRoutes;
  dynamic?: string | number | (string | number)[];
  queryString?: string;
  queryParams?: QueryParams;
}) => string;

/**
 * Constructs a valid API route that is intended to serve as both
 * the valid API and the caching key. You can think of the output
 * of this method as a string that can be supplied to any caching
 * mechanism and also appended on the domain of the application
 * to call the API
 *
 * The root parameter is strongly typed to ensure that
 * no calls are made that aren't already documented using the types
 * This gives a more reliable base to start off of and to know
 * what needs to be or should be added to the ApiRoutes type
 *
 * Examples:
 *
 * ```
 * // Output = /sample/foo/
 * getEndpoint({
 *  root: "/sample"
 *  dynamic: "foo"
 * });
 *
 * // Output = /sample/foo/bar
 * getEndpoint({
 *  root: "/sample"
 *  dynamic: ["foo", "bar"]
 * });
 *
 * // Output = /sample/
 * getEndpoint({
 *  root: "/sample"
 *  dynamic: undefined
 * });
 *
 * // Output = /sample/foo?search=bar
 * getEndpoint({
 *  root: "/sample"
 *  dynamic: "foo"
 *  queryString: "?search=bar"
 * });
 *
 * // Output = /sample/foo?search=bar
 * getEndpoint({
 *  root: "/sample"
 *  dynamic: "foo"
 *  // TBD
 *  queryString: { search: "bar"}
 * });
 * ```
 */
export const getEndpoint: GetEndpoint<Params> = ({
  root,
  dynamic,
  queryString,
  queryParams
}) => {
  // Only query string
  if (!dynamic && !queryParams && queryString) {
    // assume that QueryString has ? on it
    const queryStringOnly = `${root}${queryString}`;
    return queryStringOnly;
  }

  // Only query params
  if (!dynamic && queryParams && !queryString) {
    const queryParamsOnly = `${root}${convertParamsToQueryString(queryParams)}`;
    return queryParamsOnly;
  }

  // dynamic and query string
  if (dynamic && !queryParams && queryString) {
    const dynamicAndQueryString = `${root}/${parseDynamic(
      dynamic
    )}${queryString}`;
    return dynamicAndQueryString;
  }

  // dynamic and query params
  if (dynamic && queryParams && !queryString) {
    const dynamicAndQueryParams = `${root}/${parseDynamic(
      dynamic
    )}${convertParamsToQueryString(queryParams)}`;
    return dynamicAndQueryParams;
  }

  // only dynamic
  if (dynamic && !queryParams && !queryString) {
    const dynamicOnly = `${root}/${parseDynamic(dynamic)}/`;
    return dynamicOnly;
  }

  const rootRoute = `${root}/`;
  return rootRoute;
};

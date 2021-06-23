import { useRouter } from "next/router";
import { useCallback } from "react";

import { convertParamsToQueryString } from "./convertParamsToQueryString";
import { useQueryString } from "./useQueryString";

/**
 * This hook uses the base url and an object that is passed
 * to it, formats it to a valid query string and then pushes
 * the string to the URL.
 *
 * Any component that needs search should use that query string to
 * then parse and get it's values it needs for the API.
 */
export const useUpdateUrl = <P = Record<string, unknown>>(params?: {
  /**
   * The base URL that you want the parameters to be attached to
   * If the baseUrl doesn't exist, then it will use the existing
   * pathname as the baseUrl
   *
   * e.g.
   * ```
   * baseUrl = "/assets"
   *
   * // returns
   * `/assets?key=value&key2=value2&key3=value3
   * ```
   */
  preventHistoryEntry?: boolean;
}): (<Params = P>(queryStringParams: Params) => void) => {
  const { queryString: existingSearch } = useQueryString();
  const { push, replace, pathname } = useRouter();

  const urlControl = params?.preventHistoryEntry ? replace : push;

  const pushUrlState = useCallback(
    <Params = Record<string, unknown>>(queryStringParams: Params) => {
      const newSearch = convertParamsToQueryString(queryStringParams);
      if (existingSearch !== newSearch) {
        urlControl(`${pathname}${newSearch}`, undefined, {
          shallow: true
        });
      }
    },
    [existingSearch, urlControl, pathname]
  );
  return pushUrlState;
};

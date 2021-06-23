/**
 * Converts an object into a valid query string. If
 * a parameter doesn't exist or it has a value of an
 * empty string, then it will exclude that object's key
 * and and value from the string.
 *
 * If the resulting reduction is equal to an empty string,
 * then an empty string will be returned. If it doesn't than
 * the ampersand will prepend whatever the reductions output
 * originally was
 */
export const convertParamsToQueryString = <Params>(params: Params): string => {
  const stringified = Object.entries(params).reduce(
    (accum, [key, value], index) => {
      if (!value || value === "") {
        return accum;
      }
      if (index === 0 || accum === "") {
        return `${key}=${value}`;
      }
      return `${accum}&${key}=${value}`;
    },
    ""
  );
  if (stringified === "") {
    return "";
  }
  return `?${stringified}`;
};

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const getPropertyFromObj = <T>(
  value: T,
  path: string,
  defaultValue: string | null | undefined
) => {
  return (
    String(path)
      .split(".")
      // @ts-ignore
      .reduce((accum, v) => {
        // @ts-ignore
        try {
          // @ts-ignore
          accum = accum[v];
        } catch (e) {
          return defaultValue;
        }
        return accum;
      }, value)
  );
};

import { useRouter } from "next/router";

export const useQueryString = <QueryStringShape>(): {
  queryString: string;
  queryObj: Partial<QueryStringShape>;
} => {
  const { asPath, query } = useRouter();
  const string = asPath.split(/\?/)[1];

  return { queryString: string, queryObj: query as Partial<QueryStringShape> };
};

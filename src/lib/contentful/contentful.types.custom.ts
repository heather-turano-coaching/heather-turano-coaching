export type ContentfulPagination<T> = {
  sys: { type: "Array" };
  skip: number;
  limit: number;
  total: number;
  items: T[];
};

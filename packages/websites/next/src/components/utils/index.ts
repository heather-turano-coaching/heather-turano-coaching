export * from "./formatDate";
export * from "./getCategoriesFromTags";
export * from "./removeCategoriesFromTags";
export * from "./getFeaturedCategories";
export * from "./getRoutes";

type Node<Structure> = { node: Structure };

export const destructureNode = <T = any>({ node }: Node<T>): T => ({
  ...node
});

export const destructureNodes = <T = any>(edges: Node<T>[]): T[] =>
  edges.map(({ node }) => ({ ...node }));

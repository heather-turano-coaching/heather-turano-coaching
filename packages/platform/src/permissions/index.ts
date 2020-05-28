import { allow, rule, shield } from "graphql-shield";

import { HTCApiContext } from "../context";

export const isAuthenticated = rule("isAuthenticated", {
  cache: "contextual",
})(async (parent, args, context: HTCApiContext, info) => {
  return Boolean(context.userId);
});

export const permissions = shield({
  Query: {
    "*": isAuthenticated,
    feed: allow,
    // checkout: allow,
  },
  Mutation: {
    "*": isAuthenticated,
  },
});

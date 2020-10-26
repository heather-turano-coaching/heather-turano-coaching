import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
// can't use SchemaLink since our graphql isn't on the same server
// import { SchemaLink } from "@apollo/client/link/schema";
import { useMemo } from "react";

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${process.env.HTC_API_HOSTNAME}/graphql`,
      credentials: "same-origin"
    }),
    cache: new InMemoryCache()
  });
}

export function initApollo<T>(initialState = null): ApolloClient<T> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initApollo(initialState), [initialState]);
  return store;
}

export type SSRApolloQuery<T> = { ROOT_QUERY: T };

export const extractSsrResponse = <T>(
  client: ApolloClient<unknown>
): SSRApolloQuery<T> => {
  const cache = client.cache.extract() as SSRApolloQuery<T>;
  return cache;
};

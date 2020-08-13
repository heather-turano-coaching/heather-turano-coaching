import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GATSBY_HTC_API,
    fetch
  })
});

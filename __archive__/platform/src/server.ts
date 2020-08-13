import "./vars";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { applyMiddleware } from "graphql-middleware";

import { Context } from "./context";
// import { createDataSources } from "./data-sources";
import { authorize } from "./middleware";
import { permissions } from "./permissions";
import { schema as baseSchema } from "./schema";

const port = parseInt(process.env.PORT as string, 10) || 4000;

const app = express();
app.use(authorize);

const schema = applyMiddleware(baseSchema, permissions);

const server = new ApolloServer({
  schema,
  // dataSources: createDataSources,
  context: Context,
});

server.applyMiddleware({ app, path: "/" });

app.listen({ port }, () =>
  console.info(`🚀 Server ready at: http://localhost:${port}`)
);

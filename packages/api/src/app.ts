import "./app.env";

import path from "path";

import { makeSchema } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import createExpress, { request, response } from "express";
// import { GraphQLScalarType } from "graphql";
// import { DateTimeResolver, JSONObjectResolver } from "graphql-scalars";
import { nexusPrisma } from "nexus-plugin-prisma";
import pino from "pino-http";

import * as types from "./schema";

export const prisma = new PrismaClient();

export const schema = makeSchema({
  types,
  typegenAutoConfig: {
    sources: [
      {
        source: path.resolve(
          __dirname,
          "../node_modules/.prisma/client/index.d.ts"
        ),
        alias: "prisma"
      },
      {
        source: path.resolve(__dirname, "./app.context.ts"),
        alias: "ContextModule"
      }
    ],
    contextType: "ContextModule.Context"
  },
  outputs: {
    typegen: path.resolve(__dirname, "../model/index.d.ts"),
    schema: path.resolve(__dirname, "../api.graphql")
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      scalars: {
        // DateTime: DateTimeResolver,
        // Json: new GraphQLScalarType({
        //   ...JSONObjectResolver,
        //   name: "Json",
        //   description:
        //     "The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)."
        // })
      }
    })
  ]
});

const apollo = new ApolloServer({
  schema,
  context: () => ({ prisma, req: request, res: response })
});

const express = createExpress();

if (process.env.NODE_ENV !== "development") {
  express.use(pino());
}

apollo.applyMiddleware({ app: express });

express.listen(4000, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:4000/graphql`);
});

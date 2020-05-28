import { makeSchema } from "@nexus/schema";
import { nexusPrismaPlugin } from "nexus-prisma";

import { mutations } from "./mutations.schema";
import { objects } from "./objects.schema";
import { queries } from "./queries.schema";

const path = require("path");

export const schema = makeSchema({
  types: [queries, mutations, ...objects],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: path.resolve(__dirname, "../../schema.graphql"),
    typegen: path.resolve(__dirname, "./generated/nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("../context"),
        alias: "Context",
      },
    ],
  },
});

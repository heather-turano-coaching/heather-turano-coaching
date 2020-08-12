import path from "path";

import * as dotenv from "dotenv";
import app from "nexus";
import { prisma } from "nexus-plugin-prisma";

// load the environment variables
dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});
app.use(prisma());

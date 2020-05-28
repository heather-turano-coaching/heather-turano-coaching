/* eslint-disable import/order */
import { resolve } from "path";

import { config } from "dotenv";

config({
  path: resolve(__dirname, "../prisma/.env"),
});

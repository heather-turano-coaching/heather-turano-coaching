import path from "path";

import * as dotenv from "dotenv";

// load the environment variables
dotenv.config({
  path: path.resolve(__dirname, "../../../.env")
});

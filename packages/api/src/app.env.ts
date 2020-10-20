import path from "path";

import * as dotenv from "dotenv";

// load the environment variables
dotenv.config({
  path: path.resolve(__dirname, "../../../.env")
});

process.on("unhandledRejection", function (err) {
  module.exports.logError(err);
  if (module.exports.abort) {
    process.abort();
  }
  process.exit(1);
});

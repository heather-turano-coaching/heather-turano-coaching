const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

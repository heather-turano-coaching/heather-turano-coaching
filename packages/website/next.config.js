const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      enforce: "pre",
      use: [
        {
          options: {
            eslintPath: require.resolve("eslint")
          },
          loader: require.resolve("eslint-loader")
        }
      ],
      exclude: /node_modules/
    });

    return config;
  },

  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
};

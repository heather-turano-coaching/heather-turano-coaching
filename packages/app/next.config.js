const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const ESLintPlugin = require("eslint-webpack-plugin");

const srcDir = path.resolve(__dirname, "./src");

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, { isServer, webpack }) {
    // Don't bundle anything in the server utils
    if (!isServer) {
      config.plugins.push(new webpack.IgnorePlugin(/\/src\/lib\/server\//));
    }

    config.plugins.push(new ESLintPlugin());

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@htc/documents": path.resolve(srcDir, "./documents"),
      "@htc/models": path.resolve(srcDir, "./models"),
      "@htc/hooks": path.resolve(srcDir, "./hooks"),
      "@htc/icons": path.resolve(srcDir, "./icons"),
      "@htc/images": path.resolve(srcDir, "./images"),
      "@htc/lib": path.resolve(srcDir, "./lib"),
      "@htc/theme": path.resolve(srcDir, "./theme"),
      "@htc/utils": path.resolve(srcDir, "./utils")
    };

    return config;
  },

  images: {
    domains: ["images.ctfassets.net"]
  },

  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
};

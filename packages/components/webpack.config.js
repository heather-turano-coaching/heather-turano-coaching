const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const handler = (percentage, message, ...args) => {
  console.info(`${Math.ceil(percentage * 100)}%   - `, message);
};

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  externals: [
    nodeExternals({
      modulesFromFile: true
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new webpack.ProgressPlugin(handler), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "./tsconfig.json")
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false
            }
          },
          {
            loader: "url-loader",
            options: {
              limit: Infinity
            }
          }
        ]
      }
    ]
  }
};

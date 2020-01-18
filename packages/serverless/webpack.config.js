const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, "dist")
  },
  devtool: "source-map",
  mode,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: []
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};

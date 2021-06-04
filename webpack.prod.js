const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js", // Contenthash is used for cache busting
    path: path.resolve(__dirname, "dist"),
  },
});

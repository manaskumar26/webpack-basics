// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js", // Contenthash is used for cache busting
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // Right >> Left -> SASS - CSS > CSS - JS > JS injected to DOM
      },
    ],
  },
};

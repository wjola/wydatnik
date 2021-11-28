const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    historyApiFallback: true,
    // hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },

    // static: {
    //   directory: path.join(__dirname, "/"),
    // },
    // historyApiFallback: { index: "./index.html" },
  },
  plugins: [
    new webpack.DefinePlugin({
      // BACKEND_URL: JSON.stringify("http://localhost:5000"),
      PUBLIC_URL: JSON.stringify(""),
    }),
  ],
});

// const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  // plugins: [
  //   new webpack.DefinePlugin({
  //     BACKEND_URL: JSON.stringify("https://ugotuj.herokuapp.com"),
  //     PUBLIC_URL: JSON.stringify("https://wjola.github.io/ugotuj/"),
  //   }),
  // ],
});

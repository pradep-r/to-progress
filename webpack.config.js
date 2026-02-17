const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, "docs"),
    // },
    hot: true,
    open: true,
    watchFiles: ["src/**/*.html"],
    // liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve(__dirname, "docs"),
  //   publicPath: "/",
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

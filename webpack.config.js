const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // development mode for readable output
  entry: "./src/app.ts",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"),
    },
    hot: true,
    liveReload: true,
    open: true,
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
    followSymlinks: false,
  },
  // devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // your source template
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  // your main JS file
  output: {
    filename: "bundle.js", // the output bundle name
    path: path.resolve(__dirname, "docs"), // output folder
    publicPath: "/to-progress/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  // devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // your source template
    }),
  ],

  // your main JS file
  output: {
    filename: "bundle.js", // the output bundle name
    path: path.resolve(__dirname, "docs"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i, // target .scss files
        use: [
          "style-loader", // injects CSS into <head>
          "css-loader", // translates CSS into JS
          "sass-loader", // compiles SCSS → CSS
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

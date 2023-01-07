const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: [
      "./src/home.js",
      "./src/services.js",
      "./src/DOM.js",
      "./src/card-dispenser/card-dispenser.js",
    ],
    allTasks: [
      "./src/services.js",
      "./src/DOM.js",
      "./src/card-dispenser/card-dispenser.js",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "home.html",
      title: "Home",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      filename: "allTasks.html",
      title: "All Tasks",
      chunks: ["allTasks"],
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

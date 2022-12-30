const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: ["./src/index.js", "./src/services.js", "./src/DOM.js"],
    projects: ["./src/projectList/projects.js"],
    tasks: ["./src/taskList/tasks.js"],
    priority: ["./src/priorityList/priority.js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      template: "src/projectList/projects.html",
      chunks: ["projects"],
    }),
    new HtmlWebpackPlugin({
      filename: "priority.html",
      template: "src/priorityList/priority.html",
      chunks: ["priority"],
    }),
    new HtmlWebpackPlugin({
      filename: "tasks.html",
      template: "src/taskList/tasks.html",
      chunks: ["tasks"],
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

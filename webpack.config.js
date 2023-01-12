const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: ["./src/index.js", "./src/services.js", "./src/DOM.js"],
    allTasks: [
      "./src/index.js",
      "./src/services.js",
      "./src/DOM.js",
      "./src/all-tasks/allTasks.js",
    ],
    projects: [
      "./src/index.js",
      "./src/services.js",
      "./src/DOM.js",
      "./src/all-tasks/allTasks.js",
      "./src/projects/projects.js",
    ],
    priority: [
      "./src/index.js",
      "./src/services.js",
      "./src/DOM.js",
      "./src/all-tasks/allTasks.js",
      "./src/priority/priority.js",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Home",
      template: "src/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "allTasks.html",
      title: "All tasks",
      template: "src/index.html",
      chunks: ["allTasks"],
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      title: "Projects",
      template: "src/index.html",
      chunks: ["projects"],
    }),
    new HtmlWebpackPlugin({
      filename: "priority.html",
      title: "Priority",
      template: "src/index.html",
      chunks: ["priority"],
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

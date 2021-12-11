const path = require("path");
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./main.js", // webpack打包的入口文件
  output: {
    filename: "bundle.js", // 输出之后的文件名
    path: path.resolve("dist"), // 打包后的目录，必须是绝对路径
  },
  mode: "development",
  module: {
    rules: [
      {
        // test: /\.js$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // babel的loader，jsx文件使用babel-loader处理
          options: { presets: ["react", "env", "stage-0"] },
        },
        // loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          // css和styleloader，对css后缀的文件进行处理
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 在src目录下创建一个index.html页面当做模板来用
      template: "./index.html",
      hash: true, // 会在打包好的bundle.js后面加上hash串
    }),
  ],
  devtool: "cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
  },
};

const path = require("path");
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "./main.js"), // webpack打包的入口文件
  output: {
    path: path.join(__dirname, "./dist"), // 打包后的目录，必须是绝对路径。写法一
    // path: path.resolve("dist"), // 打包后的目录，必须是绝对路径。写法二
    filename: "bundle.js", // 输出之后的文件名
  },
  mode: "development",
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // babel的loader，jsx文件使用babel-loader处理
          options: { presets: ["react", "env", "stage-0"] },
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          // css-loader和style-loader，对css后缀的文件进行处理
          // style-loader必须在css-loader前面
          // 调用顺序是从下至上（or从右向左）的
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 在src目录下创建一个index.html页面当做模板来用
      template: path.join(__dirname, "./index.html"),
      hash: true, // 会在打包好的bundle.js后面加上hash串
    }),
  ],
  devtool: "cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    port: 8181,
  },
};

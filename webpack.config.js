const path = require("path");
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
        test: /\.js$/,
        exclude: /node_modules/,
        // use: {
        //   loader: "babel-loader", // babel的loader，jsx文件使用babel-loader处理
        //   options: { presets: ["react", "env", "stage-0"] },
        // },
        loader: "babel-loader",
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
  devtool: "cheap-source-map",
  devServer: {
    // contentBase: __dirname,
    static: {
      directory: path.join(__dirname),
    },

    // compress: true,
    // port: 8585,
  },
};

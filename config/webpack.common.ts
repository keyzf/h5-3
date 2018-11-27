import webpack from "webpack";
import WebpackBar from "webpackbar";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tsImportPluginFactory from "ts-import-plugin";
import env from "../env";

const config: webpack.Configuration = {
  entry: ["./client/index"],

  stats: "errors-only",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
  },

  module: {
    rules: [
      // tsx
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: "antd",
                    libraryDirectory: "lib",
                    style: true
                  })
                ]
              }),
              happyPackMode: true,
              experimentalWatchApi: true,
              compilerOptions: {
                module: "es2015"
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      // css
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ""
            }
          },
          "css-loader",
          {
            loader: "less-loader",
            options: {
              modifyVars: env.antTheme,
              javascriptEnabled: true
            }
          }
        ]
      },
      // file
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [
    new WebpackBar(),

    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};

export default config;

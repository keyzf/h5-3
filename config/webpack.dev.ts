import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

import * as path from "path";

/**
 * @desc webpack 开发模式下配置
 */
const config: webpack.Configuration = merge(common, {
  /**
   * @desc  开发模式：开发版
   */
  mode: "development",

  /**
   * @desc 开发服务器配置
   */
  devServer: {
    stats: "minimal",
    contentBase: path.join(__dirname, "../public/assets"),
    port: 3000
  }

});

/**
 * @desc 导出模块
 */
export default config;
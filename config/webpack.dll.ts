import path from "path";
import webpack from "webpack";


/**
 * @desc  dll配置
 */
module.exports = {
  mode: "production",
  /**
   * @desc  文件入口入口
   */
  entry: {
    /**
     * @desc 需要打包的文件
     */
    vendor: [
      "react",
      "react-dom",
      "redux",
      "immer",
      "redux-react-hook",
      "react-emotion",
      "react-qmap",
      "axios",
      'emotion',
      'react-color'
    ]
  },

  /**
   * @desc 输出文件
   */
  output: {
    filename: "[name].js", // 文件名
    library: "[name]", // 暴露的对象名
    path: path.join(__dirname, "../public/assets") // 路径
  },

  /**
   * @desc 拓展包
   */
  plugins: [
    /**
     * @desc dll 文件打包
     */
    new webpack.DllPlugin({
      name: "[name]", // 暴露的对象名
      context: __dirname,
      path: path.join(__dirname, "../public/assets/manifest.json") // 路径
    })
  ]
};
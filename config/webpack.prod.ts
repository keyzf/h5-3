import path from "path";
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';



/**
 * @desc webpack 开发环境下配置
 */
const config: webpack.Configuration = merge(common, {
    /**
     * @desc  开发模式：生产版
     */
    mode: 'production',

    plugins: [

        /**
         * @desc  dll插件
         */
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve(__dirname, "../public/assets/manifest.json"), // 路径
        }),
    ],

    /**
     * @desc 文件输出
     */
    output: {
        publicPath: '', //共公路径，可用于cdn
        filename: '[name].js', // 输出文件名
        path: path.resolve('public/assets'), //输出路径
    },


});

/**
 * @desc 导出模块
 */
export default config;
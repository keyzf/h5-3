"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const webpack_1 = __importDefault(require("webpack"));
/**
 * @desc  dll配置
 */
module.exports = {
    /**
     * @desc  文件入口入口
     */
    entry: {
        /**
         * @desc 需要打包的文件
         */
        vendor: [
            'react',
            'react-dom',
            'immer',
            'redux',
            'react-redux',
        ]
    },
    /**
     * @desc 输出文件
     */
    output: {
        filename: '[name].js',
        library: '[name]',
        path: path_1.default.join(__dirname, "../public/assets") // 路径
    },
    /**
     * @desc 拓展包
     */
    plugins: [
        /**
         * @desc dll 文件打包
         */
        new webpack_1.default.DllPlugin({
            name: "[name]",
            context: __dirname,
            path: path_1.default.join(__dirname, "../public/assets/manifest.json"),
        }),
    ],
};

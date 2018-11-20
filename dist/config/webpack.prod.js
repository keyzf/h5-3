"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const webpack_1 = __importDefault(require("webpack"));
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const webpack_common_1 = __importDefault(require("./webpack.common"));
/**
 * @desc webpack 开发环境下配置
 */
const config = webpack_merge_1.default(webpack_common_1.default, {
    /**
     * @desc  开发模式：生产版
     */
    mode: 'production',
    plugins: [
        /**
         * @desc  dll插件
         */
        new webpack_1.default.DllReferencePlugin({
            context: __dirname,
            manifest: path_1.default.resolve(__dirname, "../public/assets/manifest.json"),
        }),
    ],
    /**
     * @desc 文件输出
     */
    output: {
        publicPath: '',
        filename: '[name].js',
        path: path_1.default.resolve('public/assets'),
    },
});
/**
 * @desc 导出模块
 */
exports.default = config;

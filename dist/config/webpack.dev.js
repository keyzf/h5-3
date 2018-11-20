"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const webpack_common_1 = __importDefault(require("./webpack.common"));
const path = __importStar(require("path"));
/**
 * @desc webpack 开发模式下配置
 */
const config = webpack_merge_1.default(webpack_common_1.default, {
    /**
     * @desc  开发模式：开发版
     */
    mode: 'development',
    /**
     * @desc 开发服务器配置
     */
    devServer: {
        stats: 'minimal',
        contentBase: path.join(__dirname, '../public/assets'),
    },
    /**
     * @desc 文件输出
     */
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve('public/assets'),
    },
});
/**
 * @desc 导出模块
 */
exports.default = config;

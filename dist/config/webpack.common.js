"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const ts_import_plugin_1 = __importDefault(require("ts-import-plugin"));
/**
 * @desc webpack 基础配置
 */
const config = {
    /**
     * @desc 入口
     */
    entry: ['./client/index'],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
    },
    /**
     * @desc 模块处理
     * 🌟当前包含：
     * 🧪 css 文件处理
     * 🧪 ts 转换
     */
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                before: [ts_import_plugin_1.default({
                                        libraryName: 'antd',
                                        libraryDirectory: 'lib',
                                        style: true
                                    })]
                            }),
                            happyPackMode: true,
                            experimentalWatchApi: true,
                            compilerOptions: {
                                module: 'es2015'
                            }
                        },
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c|le)ss$/,
                use: [
                    {
                        loader: mini_css_extract_plugin_1.default.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px',
                            },
                            javascriptEnabled: true
                        }
                    },
                ],
            }
        ]
    },
    /**
     * @desc 拓展
     */
    plugins: [
        /**
         * @desc 自动生成HTML
         */
        new html_webpack_plugin_1.default({
            template: path_1.default.resolve(__dirname, '../public/index.html')
        }),
        /**
         * @desc 提取css 文件
         */
        new mini_css_extract_plugin_1.default({
            filename: '[name].css',
        }),
    ],
};
/**
 * @desc 导出配置
 */
exports.default = config;

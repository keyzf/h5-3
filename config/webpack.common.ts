import webpack from 'webpack';
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import tsImportPluginFactory from 'ts-import-plugin'

/**
 * @desc webpack 基础配置
 */
const config: webpack.Configuration = {
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
                                before: [tsImportPluginFactory(
                                    {
                                        libraryName: 'antd',
                                        libraryDirectory: 'lib',
                                        style: true
                                    }
                                )]
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {

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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),

        /**
         * @desc 提取css 文件
         */
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),


    ],


};

/**
 * @desc 导出配置
 */
export default config;



import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";
import HtmlWebpackPlugin from "html-webpack-plugin";
import env from "./env";
import * as fs from "fs";

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config: webpack.Configuration = merge(common, {
    mode: "production",

    plugins: [
        new BundleAnalyzerPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve(__dirname, "../dist/assets/manifest.json") // 路径
        })
    ],

    output: {
        publicPath: env.publicUrl, //共公路径，可用于cdn
        filename: "[name].js", // 输出文件名
        path: path.resolve("dist/assets") //输出路径
    }
});

export default config;


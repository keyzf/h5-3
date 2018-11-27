import path from "path";
import webpack from "webpack";
import WebpackBar from "webpackbar";
import env from "./env";

module.exports = {
    mode: "production",
    entry: {
        vendor: env.dll
    },
    output: {
        filename: "[name].js", // 文件名
        library: "[name]", // 暴露的对象名
        path: path.join(__dirname, "../dist/assets") // 路径
    },
    plugins: [
        new WebpackBar(),

        new webpack.DllPlugin({
            name: "[name]", // 暴露的对象名
            context: __dirname,
            path: path.join(__dirname, "../dist/assets/manifest.json") // 路径
        })
    ]
};
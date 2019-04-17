import Koa from "koa";
import Webpack from "webpack";
import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import koaWebpack from "koa-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import common from "./webpack.common";

const app = new Koa();

const config: webpack.Configuration = merge(common, {
    mode: "development",

    devServer: {
        stats: "minimal",
        contentBase: path.join(__dirname, "../public/assets")
    },

    output: {
        publicPath: "/", //共公路径，可用于cdn
        filename: "[name].js", // 输出文件名
        path: path.resolve("public/assets") //输出路径
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
});

const compiler = Webpack(config);

koaWebpack({compiler})
    .then(middleware => {
        app.use(middleware);
    })
    .catch(error => {
        console.log(error);
    });

app.listen(3000);

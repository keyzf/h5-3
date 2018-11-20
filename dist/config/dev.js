"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const webpack_1 = __importDefault(require("webpack"));
const koa_webpack_1 = __importDefault(require("koa-webpack"));
const webpack_dev_1 = __importDefault(require("./webpack.dev"));
const app = new koa_1.default();
const compiler = webpack_1.default(webpack_dev_1.default);
koa_webpack_1.default({ compiler })
    .then((middleware) => {
    app.use(middleware);
});
app.listen(3000);

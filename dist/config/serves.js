"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const koa_static_1 = __importDefault(require("koa-static"));
// @ts-ignore
const app = new koa_1.default();
/**
 * 资源目录
 */
const staticPath = '../public/assets';
app.use(koa_static_1.default(path_1.default.join(__dirname, staticPath)));
// response
app.use(ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs_1.default.createReadStream('./public/assets/index.html');
});
app.listen(3000);

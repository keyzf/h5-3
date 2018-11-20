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
const koa_1 = __importDefault(require("koa"));
const fs = __importStar(require("fs"));
const koa_static_1 = __importDefault(require("koa-static"));
const path = __importStar(require("path"));
const app = new koa_1.default();
/**
 * 资源目录
 */
const staticPath = '../public/assets';
app.use(koa_static_1.default(path.join(__dirname, staticPath)));
// response
app.use(ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./public/assets/index.html');
});
app.listen(3000);

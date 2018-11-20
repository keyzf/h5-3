"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const antd_1 = require("antd");
class LazyComponent extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Button, null, "\u51FA\u6765\u5566"),
            React.createElement(antd_1.Breadcrumb, null,
                React.createElement(antd_1.Breadcrumb.Item, null, "Home"),
                React.createElement(antd_1.Breadcrumb.Item, null,
                    React.createElement("a", { href: "" }, "Application Center")),
                React.createElement(antd_1.Breadcrumb.Item, null,
                    React.createElement("a", { href: "" }, "Application List")),
                React.createElement(antd_1.Breadcrumb.Item, null, "An Application"))));
    }
}
exports.default = LazyComponent;

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
const ReactDOM = __importStar(require("react-dom"));
const react_1 = require("react");
const LazyComponent = react_1.lazy(() => Promise.resolve().then(() => __importStar(require(`./lazy`))));
ReactDOM.render(React.createElement(react_1.Suspense, { fallback: React.createElement("div", null, "Loading...") },
    React.createElement(LazyComponent, null)), document.getElementById('root'));

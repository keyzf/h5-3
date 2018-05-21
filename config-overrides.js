const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(["import", { libraryName: "antd", style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@layout-header-background": "#19a0fa", // TODO (XXX) : ant design bug,主要是为了修改 trigger背景色颜色
      "@menu-dark-bg": "transparent",
      "@menu-dark-color": "white",
      "@menu-dark-highlight-color": "#97D2FB",
      "@primary-color": "#19a0fa", // 主题色
      "@popover-bg": "transparent"
    }
  })(config, env);
  return config;
};
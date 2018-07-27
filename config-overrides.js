const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");
const rewireCssModules = require("react-app-rewire-css-modules");

module.exports = override = (config, env) => {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#19a0fa",
      "@menu-dark-bg": "transparent",
      "@menu-dark-color": "white",
      "@menu-dark-highlight-color": "#97D2FB"
    }
  })(config, env);
  config = rewireCssModules(config, env);
  return config;
};

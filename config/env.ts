const env = {
    /**
     * @desc ui 自定义主题
     */
    antTheme: {},

    /**
     * @desc 公共链接
     * https://create-react-app.oss-cn-beijing.aliyuncs.com/
     */
    publicUrl: "https://e7wei-h5long.oss-cn-beijing.aliyuncs.com/",

    /**
     * @desc 组合打包的文件
     */
    dll: [
        "@ungap/url-search-params",
        "react",
        "react-dom",
        "immer",
        "axios",
        "redux",
        "glamor",
        "react-keydown",
        "redux-react-hook"
    ]
};

export default env;

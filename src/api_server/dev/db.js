module.exports = function () {
    return {
        // 初始化路由访问地址
        access: require("./simulation/access.api"),
        // 上传资源
        upload: require("./simulation/upload.api"),
        // 删除资源
        delete: require("./simulation/delete.api"),
        //  图片库
        img_library: require("./simulation/img_library.api"),
        // 音乐库
        music_library: require("./simulation/music_library.api"),
        // 视频库
        video_library: require("./simulation/video_library.api")
    };
};

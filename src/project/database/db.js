module.exports = function() {
  return {
    // 初始化路由访问地址
    access: require("./simulation/access.db"),
    // 上传资源
    upload: require("./simulation/upload.db"),
    // 删除资源
    delete: require("./simulation/delete.db"),
    // 保存（提交数据）
    save: require("./simulation/save.db"),
    //  图片库
    img_library: require("./simulation/img_library.db"),
    // 音乐库
    music_library: require("./simulation/music_library.db"),
    // 视频库
    video_library: require("./simulation/video_library.db"),
    //  子类型库（图片库选项列表）
    system_library_list: require("./simulation/system_library_list.db")
  };
};

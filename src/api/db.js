module.exports = function() {
  return {
    // 上传资源
    upload: require("./upload.api"),
    // 删除资源
    del: require("./del.api"),
    //  图片库
    img_library: require("./img_library.api"),
    // 音乐库
    music_library: require("./music_library.api"),
    // 视频库
    video_library: require("./video_library.api"),
    //  子类型库（图片库选项列表）
    child_type_list: require("./child_type_list.api"),

    // ui_template
    one_ui: require("./ui_json/one_ui"),
    two_ui: require("./ui_json/two_ui"),
    // release
    release_url: require("./release/release")
  };
};
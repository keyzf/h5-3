module.exports = function() {
  return {
    // model 公共图片
    page_start: require("./img_model/page_start"),
    page_0: require("./img_model/page_0"),
    page_1: require("./img_model/page_1"),
    page_2: require("./img_model/page_2"),
    page_3: require("./img_model/page_3"),
    // model 用户自有图片
    user_img_model: require("./user_img_model/user_img_model"),
    recommend_music: require("./music_recommend_ui/recommend_music"),
    recommend_video: require("./video_recommend_ui/recommend_video"),
    // ui
    one_ui: require("./ui_json/one_ui")
  };
};
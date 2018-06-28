module.exports = function() {
  return {
    // model 公共图片
    public_img_start: require("./img_model/public_img_start"),
    public_img_page_0: require("./img_model/public_img_page_0"),
    public_img_page_1: require("./img_model/public_img_page_1"),
    public_img_page_2: require("./img_model/public_img_page_2"),
    public_img_page_3: require("./img_model/public_img_page_3"),
    public_img_page_4: require("./img_model/public_img_page_4"),
    // model 用户自有图片
    user_img_start: require("./img_model/user_img/user_img_start"),
    user_img_page_0: require("./img_model/user_img/user_img_page_0"),
    user_img_page_1: require("./img_model/user_img/user_img_page_1"),
    user_img_page_2: require("./img_model/user_img/user_img_page_2"),
    user_img_page_3: require("./img_model/user_img/user_img_page_3"),
    user_img_page_4: require("./img_model/user_img/user_img_page_4"),

    // 公共音乐
    recommend_music_start: require("./music_recommend_ui/recommend_music_start"),
    recommend_music_page_0: require("./music_recommend_ui/recommend_music_page_0"),
    recommend_music_page_1: require("./music_recommend_ui/recommend_music_page_1"),
    recommend_music_page_2: require("./music_recommend_ui/recommend_music_page_2"),
    recommend_music_page_3: require("./music_recommend_ui/recommend_music_page_3"),
    recommend_music_page_4: require("./music_recommend_ui/recommend_music_page_4"),
    // 用户自有音乐
    user_music_start: require("./music_recommend_ui/user_music/user_music_start"),
    user_music_page_0: require("./music_recommend_ui/user_music/user_music_page_0"),
    user_music_page_1: require("./music_recommend_ui/user_music/user_music_page_1"),
    user_music_page_2: require("./music_recommend_ui/user_music/user_music_page_2"),
    user_music_page_3: require("./music_recommend_ui/user_music/user_music_page_3"),
    user_music_page_4: require("./music_recommend_ui/user_music/user_music_page_4"),
    // 公共视频
    recommend_video_start: require("./video_recommend_ui/recommend_video_start"),
    recommend_video_page_0: require("./video_recommend_ui/recommend_video_page_0"),
    recommend_video_page_1: require("./video_recommend_ui/recommend_video_page_1"),
    recommend_video_page_2: require("./video_recommend_ui/recommend_video_page_2"),
    recommend_video_page_3: require("./video_recommend_ui/recommend_video_page_3"),
    recommend_video_page_4: require("./video_recommend_ui/recommend_video_page_4"),
    // 用户自上传视屏
    user_video_start: require("./video_recommend_ui/user_video/user_video_start"),
    user_video_page_0: require("./video_recommend_ui/user_video/user_video_page_0"),
    user_video_page_1: require("./video_recommend_ui/user_video/user_video_page_1"),
    user_video_page_2: require("./video_recommend_ui/user_video/user_video_page_2"),
    user_video_page_3: require("./video_recommend_ui/user_video/user_video_page_3"),
    user_video_page_4: require("./video_recommend_ui/user_video/user_video_page_4"),
    // ui_template
    one_ui: require("./ui_json/one_ui"),
    two_ui: require("./ui_json/two_ui")
  };
};
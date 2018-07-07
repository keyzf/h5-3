import { fromJS } from 'immutable';

export const $$api = fromJS({
  // 当前使用环境
  surroundings: 'development',
  // 开发环境
  development: {
    /**
     * visual 页面 (程序入口路由)
     * 使用地址：src/App.jsx
     */
    editorH5: 'http://localhost:3001/one_ui',
    showH5: 'http://localhost:3001/one_ui',
    share: 'http://localhost:3001/one_ui',
    /**
     * model 图片 （用户图片库，公共图片库）
     * 使用地址：src/common/up_img_common/upload_common.jsx
     */
    user_img_start: 'http://localhost:3001/user_img_start',
    user_img_other: 'http://localhost:3001/user_img_page_',
    public_img_start: 'http://localhost:3001/public_img_start',
    public_img_other: 'http://localhost:3001/public_img_page_',

    /**
     *  音乐 ui
     */
    recommend_music_start: 'http://localhost:3001/recommend_music_start',
    recommend_music_other: 'http://localhost:3001/recommend_music_page_',
    user_music_start: 'http://localhost:3001/user_music_start',
    user_music_other: 'http://localhost:3001/user_music_page_',
    /**
     * 视频 ui
     */
    recommend_video_start: 'http://localhost:3001/recommend_video_start',
    recommend_video_other: 'http://localhost:3001/recommend_video_page_',
    user_video_start: 'http://localhost:3001/user_video_start',
    user_video_other: 'http://localhost:3001/user_video_page_',
    /**
     * 发布h5
     */
    release_url: 'http://localhost:3001/release_url',
  },
  // 生产环境
  produce: {
    // post 请求，获取数据
    editorH5: '',
    showH5: '',
    share: '',
    // post 请求 model 图片 （用户图片库，公共图片库）
    user_img_start: '',
    user_img_other: '',
    public_img_start: '',
    public_img_other: '',
    // post 请求 music
    recommend_music_start: '',
    recommend_music_other: '',
    user_music_start: '',
    user_music_other: '',
    // post 请求 video
    recommend_video_start: '',
    recommend_video_other: '',
    user_video_start: '',
    user_video_other: '',
    // post 请求 发布h5
    release_url: '',
  },
});

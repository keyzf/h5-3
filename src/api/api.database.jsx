import { fromJS } from 'immutable';

export const $$api = fromJS({
  // 当前使用环境
  surroundings: 'development',
  // 开发环境
  development: {
    upload: 'http://localhost:3001/upload',
    // 删除资源
    del: 'http://localhost:3001/del',
    //  图片库
    img_library: 'http://localhost:3001/img_library',
    //  子类型库（图片库选项列表）
    public_img_list: 'http://localhost:3001/child_type_list',
    music_library: 'http://localhost:3001/music_library',
    // 视频库
    video_library: 'http://localhost:3001/video_library',

    /**
     * visual 页面 (程序入口路由)
     * 使用地址：src/App.jsx
     */
    editorH5: 'http://localhost:3001/one_ui',
    showH5: 'http://localhost:3001/one_ui',
    share: 'http://localhost:3001/one_ui',

    /**
     * 发布h5
     */
    release_url: 'http://localhost:3001/release_url',
  },
  // 生产环境
  produce: {
    upload: '',
    // 删除资源
    del: '',
    //  图片库
    img_library: '',
    //  子类型库（图片库选项列表）
    public_img_list: '',
    music_library: '',
    // 视频库
    video_library: '',

    // post 请求，获取数据
    editorH5: '',
    showH5: '',
    share: '',

    // post 请求 发布h5
    release_url: '',
  },
});

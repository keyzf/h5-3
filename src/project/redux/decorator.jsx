import { connect } from 'react-redux';
import { redux_action } from './action';

export default connect(
  state => {
    return {
      // 解析url,获取用户id
      sid_value: state.sid_reducer,
      // 创建h5页面引导
      guide_value: state.guide_reducer,
      // 核心组件
      h5_data_value: state.h5_data_reducer,
      // 用户分享H5的传播信息
      shareMsg_value: state.shareMsg_reducer,
      // 用户模板链接
      release_value: state.release_reducer,
      // 当前选择编辑的组件
      editor_ui_value: state.editor_ui_reducer,
      // 背景组件样式
      bg_ui_value: state.bg_ui_reducer,
      // visual 侧边 ui 选择
      choose_ui_value: state.choose_ui_reducer,
      // 图片库
      user_img_value: state.user_img_reducer,
      //用户个人video
      user_video_value: state.user_video_reducer,
      // 用户个人movie
      user_music_value: state.user_music_reducer,
    };
  },
  dispatch => {
    return {
      upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
    };
  }
);

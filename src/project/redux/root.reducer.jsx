/**
 * 将拆解出去的数据处理层合并起来
 */
import { combineReducers } from 'redux';
import { guide_reducer } from './renducer/guide.renducer';
import { h5_data_reducer } from './renducer/h5_data.renducer';
import { shareMsg_reducer } from './renducer/shareMsg.renducer';
import { release_reducer } from './renducer/release.renducer';
import { user_video_reducer } from './renducer/user_video.renducer';
import { sid_reducer } from './renducer/sid.renducer';
import { editor_ui_reducer } from './renducer/editor_ui.renducer';
import { bg_ui_reducer } from './renducer/bg_ui.renducer';
import { choose_ui_reducer } from './renducer/choose_ui.renducer';
import { user_img_reducer } from './renducer/user_img.renducer';
import { user_music_reducer } from './renducer/user_music.renducer';

/**
 * 合并数据处理层
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
  // 解析url,获取用户id
  sid_reducer,
  // 创建h5页面引导
  guide_reducer,
  // 核心组件
  h5_data_reducer,
  // 用户分享H5的传播信息
  shareMsg_reducer,
  // 用户模板链接
  release_reducer,
  // 当前选择编辑的组件
  editor_ui_reducer,
  // 背景组件样式
  bg_ui_reducer,
  // visual 侧边 ui 选择
  choose_ui_reducer,
  // 图片库
  user_img_reducer,
  //用户个人video
  user_video_reducer,
  // 用户个人movie
  user_music_reducer,
});

/**
 * 导出函数
 */
export { rootReducer };

/**
 * 将拆解出去的数据处理层合并起来
 */
import { combineReducers } from 'redux';
import { user_id_reducer } from './renducer/user_id.renducer';
import { guide_reducer } from './renducer/guide.renducer';
import { h5_data_reducer } from './renducer/h5_data.renducer';
import { choose_reducer } from './renducer/choose_ui.renducer';
import { bg_reducer } from './renducer/bg.renducer';
import { shareMsg_reducer } from './renducer/shareMsg.renducer';
import { ui_h5_data_reducer } from './renducer/ui_select.renducer';
import { release_reducer } from './renducer/release.renducer';
import { img_model_reducer } from './renducer/img_model.renducer';
import { upload_recode_reducer } from './renducer/upload_recode.renducer';
import { img_library_reducer } from './renducer/img_library.renducer';

import { up_img_reducer, html5_reducer } from './reducer';

/**
 * 合并数据处理层
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
  // 解析url,获取用户id
  user_id_reducer,
  // 创建h5页面引导
  guide_reducer,
  // 核心组件
  h5_data_reducer,
  // 当前选择编辑的组件
  choose_reducer,
  // 背景组件样式
  bg_reducer,
  // 用户分享H5的传播信息
  shareMsg_reducer,
  // visual 侧边 ui 选择
  ui_h5_data_reducer,
  // 用户模板链接
  release_reducer,
  // img model 模块（用户图片及公共图片）
  img_model_reducer,
  // 记录用户上传图片及选择图片url
  upload_recode_reducer,
  // 图片库
  img_library_reducer,

  up_img_reducer,
  html5_reducer,
});

/**
 * 导出函数
 */
export { rootReducer };

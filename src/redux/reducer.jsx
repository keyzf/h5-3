/**
 * 数据处理层
 */
import { Map, List, fromJS } from 'immutable';
import { $$background_database } from '../ui/background/background_database';

/**
 * 核心组件（制作h5,修改h5 页面数据集存放的地方）
 * @param state
 * @param action
 * @returns {*}
 */
const select_data = { data: List(), meta: '', error: '' };
const h5_data_reducer = (state = { ...select_data }, action) => {
  switch (action.type) {
    case 'SELECT_COMPONENTS':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};
/**
 * h5页面 用户传播信息
 * @param state
 * @param action
 * @returns {*}
 */
const user_h5_message_data = {
  data: fromJS({
    img: '',
    title: { value: '' },
    content: { value: '' },
  }),
  meta: '',
  error: false,
};
const shareMsg_reducer = (
  state = { ...user_h5_message_data },
  action
) => {
  switch (action.type) {
    case 'USER_H5_MESSAGE':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};
/**
 * visual 页面，可选择 ui 展示
 * @param state
 * @param action
 * @returns {*}
 */
const visual_ui_show_data = {
  data: fromJS({ name: '', menuChoose: ''}),
  meta: '',
  error: false,
};
const ui_h5_data_reducer = (state = { ...visual_ui_show_data }, action) => {
  switch (action.type) {
    case 'VISUAL_UI_SHOW':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};
/**
 * meta 信息中 ，content用来控制中间界面的显示，choose 用来控制背景栏的显示 ，如果
 * content : true: 显示核心数组，否则显示默认
 * choose ：true 显示选择组件编辑栏，否则显示默认
 * @param state
 * @param action
 * @returns {*}
 */
const choose_data = {
  data: Map(),
  meta: Map({ content: false, choose: false }),
  error: false,
};
const choose_reducer = (state = { ...choose_data }, action) => {
  switch (action.type) {
    case 'CHOOSE_COMPONENTS':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};
/**
 * 背景组件默认数据
 * @param state
 * @param action
 * @returns {*}
 */
const bg_data = { data: $$background_database, meta: '', error: false };
const bg_reducer = (state = { ...bg_data }, action) => {
  switch (action.type) {
    case 'BG_COMPONENTS':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};

/**
 * 用户id
 */
const id_data = {
  data: Map({ id: '' }),
  meta: Map({ content: false, choose: false }),
  error: false,
};
const id_reducer = (state = { ...id_data }, action) => {
  switch (action.type) {
    case 'ID':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};

/**
 * visual 页面引导
 */
const guide_data = {
  data: fromJS({ guide: false }),
  meta: Map({ content: false, choose: false }),
  error: false,
};
const guide_reducer = (state = { ...guide_data }, action) => {
  switch (action.type) {
    case 'GUIDE':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};

/**
 * 导出文件
 */
export {
  shareMsg_reducer,
  ui_h5_data_reducer,
  choose_reducer,
  h5_data_reducer,
  bg_reducer,
  id_reducer,
  guide_reducer,
};

export const html5_reducer = (
  state = {
    data: Map({
      img: '',
      title: Map({ value: '' }),
      content: Map({ value: '' }),
    }),
    meta: '',
    error: false,
  },
  action
) => {
  switch (action.type) {
    case 'Html5_message':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};

/**
 * TODO data:list() future with ajax
 * @param state
 * @param action
 * @returns {*}
 *
 */
export const up_img_reducer = (
  state = {
    data: Map({ self: List(), recommend: '' }),
    meta: '',
    error: false,
  },
  action
) => {
  switch (action.type) {
    case 'UP_IMG_COMPONENTS':
      return {
        // 将信息传递给处理函数
        data: action.payload,
        meta: action.meta,
        error: action.error,
      };
    default:
      return state;
  }
};

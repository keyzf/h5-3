import { Map, List } from 'immutable';
import { $$background_database } from '../ui/visual/components/background_database';

export const select_reducer = (
  state = { data: List(), meta: '', error: '' },
  action
) => {
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

// meta 信息中 ，content用来控制中间界面的显示，choose 用来控制背景栏的显示 ，如果
// content : true: 显示核心数组，否则显示默认
// choose ：true 显示选择组件编辑栏，否则显示默认
export const choose_reducer = (
  state = {
    data: Map({}),
    meta: Map({ content: false, choose: false }),
    error: false,
  },
  action
) => {
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

export const bg_reducer = (
  state = { data: $$background_database, meta: '', error: false },
  action
) => {
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

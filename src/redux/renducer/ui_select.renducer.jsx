import { fromJS } from 'immutable';

const ui_h5_data_reducer = (
  state = { data: fromJS({ name: '', menuChoose: '' }) },
  action
) => {
  switch (action.type) {
    case 'UI_SELECT':
      return {
        data: action.payload,
      };
    //  后期删除
    case 'VISUAL_UI_SHOW':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

/**
 * 导出文件
 */
export { ui_h5_data_reducer };

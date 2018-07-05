import { fromJS } from 'immutable';

/**
 * 用来记录上传记录
 * 1. 用户上传的图片
 * 2. 用户当前选择的图片url
 * @param state
 * @param action
 * @returns {*}
 */

const upload_recode_reducer = (
  state = { data: fromJS({ user_upload_img: [], choose_img_url: '' }) },
  action
) => {
  switch (action.type) {
    case 'UPLOAD_RECODE':
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
export { upload_recode_reducer };

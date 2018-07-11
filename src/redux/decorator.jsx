import { connect } from "react-redux";
import { choose_redux_action, redux_action } from "./action";

export default connect(
  state => {
    return {
      // 组件数据
      h5_data_value: state.h5_data_reducer,
      // 选择组件数组
      choose_value: state.choose_reducer,
      // 背景组件数据
      bg_value: state.bg_reducer,
      // 用来判断是否启用引导教程
      guide_value: state.guide_reducer,
      // visual 侧边 ui 选择
      ui_select_value: state.ui_h5_data_reducer,
      // 分享信息
      shareMsg_value: state.shareMsg_reducer,
      // 用户提交id
      id_value: state.user_id_reducer,
      // 用户自己的图片
      img_model_value: state.img_model_reducer,
      // 记录图片上传信息，及选择图片的信息（通用）
      upload_recode_value: state.upload_recode_reducer,


    };

  },
  dispatch => {
    return {
      upData: (name, data) => dispatch(redux_action(name, data)),
      choose_upData: (name, data, meta) =>
        dispatch(choose_redux_action(name, data, meta))
    };
  }
);

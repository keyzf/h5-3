import { connect } from "react-redux";
import RxAction from "./action";

export default connect(
  state => ({
    RxUi: state.RxUi,
    RxPreview: state.RxPreview,
    RxRelease: state.RxRelease,
    RxEditor: state.RxEditor,
    RxBg: state.RxBg
  }),
  dispatch => ({
    RxAction: (type: string, data: any) => dispatch(RxAction(type, data))
  })
);

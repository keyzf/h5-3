/**
 *  visual editor编辑界面
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Map } from "immutable";
import TweenOne from "rc-tween-one";
import BgEditor from "../../containers/visual/editor/bg_editor";
import style from "./editor.module.scss";
import { choose_action } from "../../redux/action";
import { render_form } from "../../containers/visual/editor/render_form";

/**
 * 实现功能：
 * 1. 控制背景组件的补充按钮何时出现
 * 2. 控制界面显示何种内容
 */
class EditorVisualView extends PureComponent {
  /**
   * 点击背景按钮时，
   * 通过修改choose 数值
   * 使editor界面返回到背景编辑界面
   */
  onclick_choose_bg = () => {
    this.props.choose_upData(
      this.props.choose_value.data,
      Map({
        content: this.props.choose_value.meta.get("content"),
        choose: false
      }),
      false
    );
  };

  /**
   * 渲染组件
   * @returns {*}
   */
  render() {
    const $$choose_data = this.props.choose_value.data;
    const $$choose_meta = this.props.choose_value.meta;
    return (
      <div className={style.layout}>
        {$$choose_meta.get("choose") ? (
          //显示组件编辑栏
          <React.Fragment>
            <TweenOne
              animation={{ left: "-90px" }}
              className={style.pos_tab}
              onClick={this.onclick_choose_bg.bind(this)}
            >
              全局背景
            </TweenOne>
            {render_form($$choose_data)}
          </React.Fragment>
        ) : (
          // 显示背景
          <BgEditor/>
        )}
      </div>
    );
  }
}

/**
 * 从数据源读取数据
 * @param state
 * @returns {{choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    choose_value: state.choose_reducer
  };
};

/**
 * 发送需要修改的数据
 * @param dispatch
 * @returns {{choose_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(EditorVisualView);

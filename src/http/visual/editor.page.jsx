import React, { PureComponent } from "react";
import { connect } from "react-redux";
import TweenOne from "rc-tween-one";
import BgEditor from "../../containers/visual/editor/bg_editor";
import { choose_redux_action } from "../../redux/action";
import { render_form } from "../../containers/visual/editor/render_form";
import style from "./editor.module.scss";

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
    this.props.choose_upData("CHOOSE_UI",
      this.props.choose_value.data,
      {
        content: this.props.choose_value.meta.get("content"),
        choose: false
      }
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
              animation={{ top: "10px" }}
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

const mapStateToProps = state => {
  return {
    choose_value: state.choose_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorVisualView);

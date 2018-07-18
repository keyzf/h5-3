import React, { PureComponent } from "react";
import connect from "../../../redux/decorator";
import TweenOne from "rc-tween-one";
import BgEditor from "./bg/bg_editor";
import { render_formFunc } from "./render_form.func";
import style from "./editor.module.scss";

@connect
export default class EditorVisualView extends PureComponent {
  onclick_choose_bg = () => {
    this.props.upData("EDITOR_UI", this.props.editor_ui_value.data, {
      content: this.props.editor_ui_value.meta.get("content"),
      choose: false
    });
  };

  render() {
    const { data, meta } = this.props.editor_ui_value;
    return (
      <div className={style.layout}>
        {meta.get("choose") ? (
          //显示组件编辑栏
          <React.Fragment>
            <TweenOne
              animation={{ top: "0px" }}
              className={style.pos_tab}
              onClick={this.onclick_choose_bg.bind(this)}
            >
              全局背景
            </TweenOne>
            {render_formFunc(data)}
          </React.Fragment>
        ) : (
          // 显示背景
          <BgEditor/>
        )}
      </div>
    );
  }
}

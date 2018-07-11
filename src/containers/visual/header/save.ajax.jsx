//visual 页面进行保存操作的按钮
import React, { PureComponent } from "react";
import { message } from "antd";
import connect from "../../../redux/decorator";
import QueueAnim from "rc-queue-anim";
import { save_ajax } from "../../../ajax/save";

@connect
export default class ToSaveAjax extends PureComponent {
  /**
   * 将信息传递给后台
   * 1. 页面组件
   * 2. 背景组件
   * 3. 用户设置的信息
   */
  onSave = () => {
    save_ajax({ ...this.props })
      .then((data) => {
        if (data) {
          message.success("保存失败");
        } else {
          message.success("保存成功");
        }
      })
      .catch((data) => {
        message.success("未知错误");
      });
  };

  render() {
    return (
      <div onClick={this.onSave}>
        <QueueAnim type={"bottom"} delay={220}>
          <div key={"1"}>
            <i
              className={"icon iconfont icon-baocun"}
              style={{ marginRight: "10px" }}
            />
            保存
          </div>
        </QueueAnim>
      </div>
    );
  }
}


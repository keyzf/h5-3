import React, { PureComponent } from "react";
import QueueAnim from "rc-queue-anim";
import { message } from "antd";
import connect from "../redux/decorator";
import { save_ajax } from "../api/save.api";

@connect
export class BtnSave extends PureComponent {
  onSave = () => {
    save_ajax({ ...this.props })
      .then(data => {
        if (data) {
          message.success("保存失败");
        } else {
          message.success("保存成功");
        }
      })
      .catch(data => {
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

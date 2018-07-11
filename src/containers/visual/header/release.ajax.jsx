import React, { PureComponent } from "react";
import QueueAnim from "rc-queue-anim";
import connect from "../../../redux/decorator";
import { save_ajax } from "../../../ajax/save";

/**
 * 将信息传递给后台
 * 1. 页面组件
 * 2. 背景组件
 * 3. 用户设置的信息
 */
@connect
export default class ToReleaseAjax extends PureComponent {

  onSave = () => {
    save_ajax({ ...this.props })
      .then((data) => {

      })
      .catch((data) => {

      });
  };

  render() {
    return (
      <div onClick={this.onSave}>
        <QueueAnim type={"bottom"} delay={220}>
          <div key={"1"}>
            <i
              className={"icon iconfont icon-fabu"}
              style={{ marginRight: "10px" }}
            />
            发布
          </div>
        </QueueAnim>
      </div>
    );
  }
}


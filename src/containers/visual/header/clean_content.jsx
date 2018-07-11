import React, { PureComponent } from "react";
import connect from "../../../redux/decorator";
import { Icon, Modal, message } from "antd";
import QueueAnim from "rc-queue-anim";
import { $$background_database } from "../../../ui/background/background_database";

/**
 * 逻辑：
 * 1. 判断content中的内容是否存在
 * 2. 判断背景组件是否设置内容
 * 3. 如果都设置内容，则将内容全部清空，并给出提示
 * 4. 如果只有背景组件设置内容则全部清空
 * 5. 如果都没有设置内容，则给出提示（还未设置内容）
 */
@connect
export default class CleanContent extends PureComponent {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  hideModal = () => {
    this.setState({
      visible: false
    });
  };
  clean = () => {
    // 清空核心组件
    this.props.upData("H5_DATA", []);
    // 清空背景组件
    this.props.upData("BG_UI", $$background_database);
    // 更新选择组件
    this.props.choose_upData(
      "CHOOSE_UI",
      {},
      {
        content: false,
        choose: false
      }
    );
    this.setState({
      visible: false
    });
    message.success("内容已清空");
  };
  confirm = () => {
    //判断用户是否设置内容(背景组件)
    const $$color = this.props.bg_value.data.getIn(["customize", "color"]);
    const $$img = this.props.bg_value.data.getIn(["customize", "img"]);
    const $$select_size = this.props.h5_data_value.data.size;
    if ($$color === "" && $$img === "" && $$select_size === 0) {
      Modal.confirm({
        title: "内容清空",
        okText: "确认",
        cancelText: "取消",
        content: "请先在画布中填充内容",
        onOk: this.hideModal,
        onCancel: this.hideModal
      });
    } else {
      Modal.confirm({
        title: "内容清空",
        okText: "确认",
        cancelText: "取消",
        content: "内容删除后无法恢复,请慎重操作",
        onOk: this.clean,
        onCancel: this.hideModal
      });
    }
  };

  render() {
    return (
      <div onClick={this.confirm}>
        <QueueAnim type={"bottom"} delay={260}>
          <div key={"animation_one"}>
            <Icon type="delete" style={{ marginRight: "10px" }}/>
            内容清空
          </div>
        </QueueAnim>
      </div>
    );
  }
}


/**
 * 用来清空content page 中的内容
 */
import React from "react";
import { List, Map } from "immutable";
import { connect } from "react-redux";
import { Icon, Modal, message } from "antd";
import { bg_action, choose_action, select_action } from "../../redux/action";
import { $$background_database } from "../../ui/visual/database/background_database";

class CleanContent extends React.Component {
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
    this.props.select_upData(List(), "", false);
    // 清空背景组件
    this.props.bg_upData($$background_database, "", false);
    // 更新选择组件
    this.props.choose_upData(
      Map(),
      Map({
        content: false,
        choose: false
      }),
      false
    );
    this.setState({
      visible: false
    });
    message.success("内容已清空");
  };

  confirm = () => {
    Modal.confirm({
      title: "内容清空",
      okText: "确认",
      cancelText: "取消",
      content: "内容删除后无法恢复,确认清空?",
      onOk: this.clean,
      onCancel: this.hideModal
    });
  };

  render() {
    return (
      <React.Fragment>
        <div onClick={this.confirm} style={{ color: "white" }}>
          <Icon type="delete" style={{ marginRight: "10px" }}/>
          内容清空
        </div>
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    bg_upData: (data, meta, error) =>
      dispatch(bg_action(data, meta, error))
  };
};

export default connect("", mapDispatchToProps)(CleanContent);

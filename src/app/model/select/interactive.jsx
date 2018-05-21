import React from "react";
import { Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import { Map } from "immutable";
import { connect } from "react-redux";
import { choose_action, select_action } from "../../../redux/action";

const default_text = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexFlow: "column nowrap",
  margin: "auto"
};

class InterActiveSelect extends React.Component {
  /**
   * 触发两个action
   * 目的---> 1.更新核心数组 select
   *         2. 更新选择数组 choose
   * @param data
   */
  transfer = (data) => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.select_value.data.push(data);
    // 更新核心数组
    this.props.select_upData(select_up_data, "meta", false);
    // 更新选择组件
    this.props.choose_upData(Map({ number: select_up_data.size, data: data }), Map({
      content: true,
      choose: true
    }), false);
  };

  render() {
    return (
      <QueueAnim delay={200} type={"left"}>
        <Row type={"flex"} gutter={16} key={1}>
          <Col span={6} style={default_text} className={"components_hover"} onClick={this.transfer.bind(this)}>
            <i className="icon iconfont icon-anniu" style={{ fontSize: "26px", flex: "1" }}/>
            <div style={{ flex: "1" }}>按钮</div>
          </Col>
          <Col span={6} style={default_text} className={"components_hover"} onClick={this.transfer.bind(this)}>
            <i className="icon iconfont icon-biaodan" style={{ fontSize: "26px", flex: "1" }}/>
            <div style={{ flex: "1" }}>表单</div>
          </Col>
          <Col span={6} style={default_text}/>
          <Col span={6} style={default_text}/>
        </Row>
      </QueueAnim>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    select_value: state.select_reducer
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    select_upData: (data, meta, error) => dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) => dispatch(choose_action(data, meta, error))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterActiveSelect);

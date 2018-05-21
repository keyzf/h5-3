import React from "react";
import { Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";

const default_text = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexFlow: "column nowrap",
  margin: "auto"
};

class InterActiveSelect extends React.Component {
  render() {
    return (
      <QueueAnim delay={200} type={"left"}>
        <Row type={"flex"} gutter={16} key={1}>
          <Col span={6} style={default_text} className={"components_hover"}>
            <i className="icon iconfont icon-anniu" style={{ fontSize: "26px", flex: "1" }}/>
            <div style={{ flex: "1" }}>按钮</div>
          </Col>
          <Col span={6} style={default_text} className={"components_hover"}>
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

// hoc
export default InterActiveSelect;
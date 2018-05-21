import React from "react";
import { Row, Col, Icon } from "antd";

// 样式
const default_text = {
  alignItems: "center",
  border: "1px solid #ddd",
  display: "flex",
  height: "50px",
  justifyContent: "center",
  margin: "auto",
  width: "50px"
};
const icon_center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto"
};


// 默认模板
export const VerticalTextTemplate = () => {
  return (
    <Row type={"flex"} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={"http://marketing.xiuzan.com/src/images/form/text2.png"}
          alt={"horizontal_text_img"}
        />
      </Col>
      <Col span={16}>
        纵向文本<br/>
        内容纵向排版的文本组件
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
      </Col>
    </Row>
  );
};

// 默认模板
export const HorizontalTextTemplate = () => {
  return (
    <Row type={"flex"} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={"http://marketing.xiuzan.com/src/images/form/text.png"}
          alt={"horizontal_text_img"}
        />
      </Col>
      <Col span={16}>
        横向文本<br/>
        内容横向排版的文本组件
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
      </Col>
    </Row>
  );
};

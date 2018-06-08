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
export const MusicTemplate = () => {
  return (
    <Row type={"flex"} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/img/%E9%9F%B3%E4%B9%90%402x.png"}
          alt={"horizontal_text_img"}
        />
      </Col>
      <Col span={16}>
        音乐<br/>
        这里添加音乐描述
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
      </Col>
    </Row>
  );
};

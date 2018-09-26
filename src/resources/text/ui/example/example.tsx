import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Icon from "antd/lib/icon";

export const VerticalTextExample = () => {
  return (
    <Row type={"flex"} gutter={16}>
      <Col span={6} className={"example_img"}>
        <img
          src={"http://src.e7wei.com/0.33359334389678663.png"}
          alt={"horizontal_text_img"}
        />
      </Col>
      <Col span={16}>
        纵向文本<br/>
        内容纵向排版的文本组件
      </Col>
      <Col span={2} className={"center"}>
        <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
      </Col>
    </Row>
  );
};

export const HorizontalTextExample = () => {
  return (
    <Row type={"flex"} gutter={16}>
      <Col span={6} className={"example_img"}>
        <img
          src={"http://src.e7wei.com/0.15285884372691427.png"}
          alt={"horizontal_text_img"}
        />
      </Col>
      <Col span={16}>
        横向文本<br/>
        内容横向排版的文本组件
      </Col>
      <Col span={2} className={"center"}>
        <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
      </Col>
    </Row>
  );
};

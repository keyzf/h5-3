import React from "react";
import { Row, Col, Icon } from "antd";
import styled from "styled-components";

export const OneTextTemplateStyle = styled.div`
 background: url(https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A25%402x.png) no-repeat;
`;

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
export const OneTextTemplate = () => {
  return (
    <OneTextTemplateStyle>
      <div style={{ padding: "15px 0 0 13px" }}
           dangerouslySetInnerHTML={{ __html: "<p>这里填充标题<br/>填充补充内容填充补充内容填充补充内容</p>" }}
      />
    </OneTextTemplateStyle>
  );
};

const LayoutRow = {
  gutter: 16,
  type: "flex",
  justify: "center",
  align: "center",
  style: {
    alignItems: "center",
    height: "100%",
    overflow: "hidden"
  }
};
export const TwoTextTemplate = () => {
  return (
    <Row  {...LayoutRow}>
      <Col span={14}>
        <div style={{ display: " inline" }}
             dangerouslySetInnerHTML={{ __html: "请在这里填入适当的内容！" }}/>
      </Col>
      <Col span={10}>
        <img
          src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%BB%846%402x.png"} alt={"img"}/>
      </Col>
    </Row>
  );
};

export const ThreeTextTemplate = () => {
  return (
    <Row {...LayoutRow}>
      <Col span={4}>
        <img
          src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E5%AE%9A%E4%BD%8D%402x.png"} alt={"img"}/>
      </Col>
      <Col span={20}>
        <div dangerouslySetInnerHTML={{ __html: "坐标定位" }}/>
      </Col>
    </Row>
  );
};
export const FourTextTemplate = () => {
  return (
    <Row {...LayoutRow}>
      <Col span={4}>
        <img
          src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A22%402x.png"}
          alt={"img"}/>
      </Col>
      <Col span={20}>
        <div style={{ display: " inline" }}
             dangerouslySetInnerHTML={{ __html: "时钟标志" }}/>
      </Col>
    </Row>
  );
};
export const FiveTextTemplate = () => {
  return (
    <div
      style={{ borderTop: "2px grey solid", borderBottom: "2px grey solid", padding: "5px 5px", overflow: "hidden" }}>
      在这里填充合适的内容
    </div>
  );
};
export const SixTextTemplate = () => {
  return (
    <Row {...LayoutRow}>
      <Col span={8}>
        <img
          src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A23%E6%8B%B7%E8%B4%9D47%402x.png"}
          alt={"img"}/>
      </Col>
      <Col span={8}>
        <div dangerouslySetInnerHTML={{ __html: "&nbsp;&nbsp;完美主义者" }}/>
      </Col>
      <Col span={8}>
        <img
          src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A23%E6%8B%B7%E8%B4%9D47%402x.png"}
          alt={"img"}/>
      </Col>
    </Row>
  );
};
export const SevenTextTemplate = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>主讲人</h1>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-35px",
        zIndex: "-1",
        position: "relative"
      }}>
        <img src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A26%402x.png"} alt={"img"}/>
      </div>
    </div>
  );
};
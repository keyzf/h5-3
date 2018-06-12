import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class TwoTextUi extends PureComponent {
  render() {
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
    return (
      <Row {...LayoutRow}>
        <Col span={14}>
          <div
            style={{ display: " inline" }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
        <Col span={10}>
          <img width={"100%"} height={"auto"}
               src={
                 "https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%BB%846%402x.png"
               }
               alt={"img"}
          />
        </Col>
      </Row>
    );
  }
}


const two_html_text = "<p>请在这里填入适当的内容！</p>";

export {
  TwoTextUi,
  two_html_text
};
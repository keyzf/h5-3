import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class SixTextUi extends PureComponent {
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
        <Col span={8}>
          <img
            src={
              "https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A23%E6%8B%B7%E8%B4%9D47%402x.png"
            }
            alt={"img"}
          />
        </Col>
        <Col span={8}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }}/>
        </Col>
        <Col span={8}>
          <img
            src={
              "https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A23%E6%8B%B7%E8%B4%9D47%402x.png"
            }
            alt={"img"}
          />
        </Col>
      </Row>
    );
  }
}

const six_html_text = "极度完美主义";

export {
  SixTextUi,
  six_html_text
}
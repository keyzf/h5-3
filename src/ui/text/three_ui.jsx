import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class ThreeTextUi extends PureComponent {
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
        <Col span={4}>
          <img height={"auto"} width={"100%"}
               src={
                 "https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E5%AE%9A%E4%BD%8D%402x.png"
               }
               alt={"img"}
          />
        </Col>
        <Col span={20}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }}/>
        </Col>
      </Row>
    );
  }
}

const three_html_text = "位置定位";

export {
  three_html_text,
  ThreeTextUi
};
import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class ThirteenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={14}>
          <img width={"100%"} height={"auto"}
               src={"http://pa797wytw.bkt.clouddn.com/%E7%9F%A9%E5%BD%A22%E6%8B%B7%E8%B4%9D2@2x.png"} alt={"img"}/>
        </Col>
        <Col span={10}/>
        <Col span={24}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }}/>
        </Col>
        <Col span={14} offset={10}>
          <img width={"100%"} height={"auto"}
               src={"http://pa797wytw.bkt.clouddn.com/%E7%9F%A9%E5%BD%A22%E6%8B%B7%E8%B4%9D@2x.png"} alt={"img"}/>
        </Col>
      </Row>
    );
  }
}


const thirteen_html_text = "<h3>福利待遇</h3>";

export { ThirteenTextUi, thirteen_html_text };

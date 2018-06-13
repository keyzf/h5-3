import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class SevenTeenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16} style={{ marginTop: "40px" }}>
        <Col span={24}>
          <div
            style={{ marginLeft: "30px" }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
        <Col span={24} style={{
          marginTop: "-44px",
          zIndex: "-1",
          position: "relative"
        }}>
          <img alt={'img'} style={{ width: "100%", height: "auto" }}
               src={"http://pa797wytw.bkt.clouddn.com/20b5f5b6c4c4702c9426b25498d6d891@2x.png"}/>
        </Col>
      </Row>
    );
  }
}

const seventeen_html_text = "<h3 style=\"color: white\">浓郁古风</h3>";

export { SevenTeenTextUi, seventeen_html_text };

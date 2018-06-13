import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class FifteenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16} style={{ marginTop: "40px" }}>
        <Col span={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "auto"
            }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
        <Col span={24} style={{
          marginTop: "-68px",
          zIndex: "-1",
          position: "relative"
        }}>

          <img alt={"img"} style={{ width: "100%", height: "auto" }}
               src={"http://pa797wytw.bkt.clouddn.com/%E7%BB%8414@2x.png"}/>
        </Col>
      </Row>
    );
  }
}

const fifteen_html_text = "<h3>联系我们</h3>";

export { FifteenTextUi, fifteen_html_text };

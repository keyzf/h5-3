import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class FifteenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent:'center',
            margin: "auto",
            maxWidth:'310px',
            background: "url(http://pa797wytw.bkt.clouddn.com/%E7%BB%8414@2x.png)",
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat'
          }} dangerouslySetInnerHTML={{ __html: this.props.html }}/>
        </Col>
      </Row>
    );
  }
}

const fifteen_html_text = "<h3>联系我们</h3>";

export { FifteenTextUi, fifteen_html_text };

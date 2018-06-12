import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class ElevenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <img width={'100%'}  height={'auto'} src={"http://pa797wytw.bkt.clouddn.com/%E7%BB%8411@2x.png"} alt={'img'}/>
        </Col>
        <Col span={12}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }}/>
        </Col>
        <Col span={6}>
          <img width={'100%'}  height={'auto'} src={"http://pa797wytw.bkt.clouddn.com/%E7%BB%8411%E6%8B%B7%E8%B4%9D@2x.png"} alt={'img'}/>
        </Col>
      </Row>
    );
  }
}

const eleven_html_text = "<h3>招聘岗位</h3>";

export { ElevenTextUi, eleven_html_text };

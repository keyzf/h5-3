import React, { PureComponent } from 'react';
import { Button, Card, Col, message, Row } from 'antd';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

class EditorReleaseView extends PureComponent {
  static outMessage() {
    message.success('复制成功！');
  }

  render() {
    const $$url = this.props.release_value.data.get('url');
    return (
      <Row>
        <Card title="38女神节店铺促销" style={{ width: '100%' }}>
          <Row gutter={24}>
            <Col span={8}>
              <QRCode size={180} value={$$url} />
              <br />
              <p style={{ textAlign: 'center' }}>微信扫一扫，预览活动</p>
            </Col>
            <Col span={16}>
              发布方式：<br />
              <br />
              1.微信扫描二维码分享群或好友；<br />
              <br />
              2.参照教程发布到公众号，<a
                href={'http://www.e7wei.com/help-article-id-436.html'}
              >
                进入教程
              </a>；<br />
              <br />
              3.右击保存二维码，打印用于线下活动。<br />
              <br />
            </Col>
          </Row>
          <br />
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Button type="primary" style={{ width: '100%' }}>
                <Link to={'/visual'}>继续编辑</Link>
              </Button>
            </Col>
            <Col span={12}>
              <CopyToClipboard text={'sadfsdf'}>
                <Button
                  style={{ width: '100%' }}
                  onClick={EditorReleaseView.outMessage}
                >
                  复制链接
                </Button>
              </CopyToClipboard>
            </Col>
          </Row>
        </Card>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    release_value: state.release_rdc,
  };
};

export default connect(mapStateToProps)(EditorReleaseView);
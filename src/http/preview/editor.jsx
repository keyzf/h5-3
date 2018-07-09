import React, { PureComponent } from 'react';
import { Card, Col, Row } from 'antd';
import FormPreviewView from './form.page';
import { connect } from 'react-redux';
import { redux_action } from '../../redux/action';
import UploadImgCommon from '../../common/upload_img.common';

class EditorPreviewView extends PureComponent {
  changImgToChild = data => {
    const $$img = this.props.shareMsg_value.data.set('img', data);
    this.props.upData('SHARE_MSG', $$img);
  };
  editorFeatures = data => {
    let $$new_html5;
    if (data.title) {
      $$new_html5 = this.props.shareMsg_value.data.setIn(
        ['title', 'value'],
        data.title.value
      );
    }
    if (data.content) {
      $$new_html5 = this.props.shareMsg_value.data.setIn(
        ['content', 'value'],
        data.content.value
      );
    }
    this.props.upData($$new_html5, '', false);
  };

  render() {
    const $$img = this.props.shareMsg_value.data.get('img');
    const $$data = this.props.shareMsg_value.data;
    return (
      <Row>
        <Col>
          <Card
            title="微信分享设置"
            style={{
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: 'none',
            }}
          >
            <Row gutter={16}>
              <Col
                span={7}
                style={{
                  margin: 'auto',
                  height: '100px',
                  border: '1px solid #e7e7e7',
                  textAlign: 'center',
                  color: '#e7e7e7',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <UploadImgCommon
                  func={this.changImgToChild}
                  url={$$img}
                  children={
                    <img
                      style={{
                        verticalAlign: 'middle',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        margin: 'auto',
                      }}
                      src={
                        $$img
                          ? $$img
                          : 'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'
                      }
                      alt={'img'}
                    />
                  }
                />
              </Col>
              <Col span={17}>
                <br />
                <UploadImgCommon
                  func={this.changImgToChild}
                  url={$$img}
                  children={<span onClick={this.showModal}>点击更换图片</span>}
                />
                <br />
                <br />
                最佳尺寸：200*200像素,jpg/png/gif
              </Col>
              <Col span={24}>
                <br />
                <FormPreviewView
                  content={$$data.get('content').toJS()}
                  title={$$data.get('title').toJS()}
                  onChange={this.editorFeatures}
                />
              </Col>
            </Row>
          </Card>
          <Card title="微信显示效果" style={{ border: 'none' }}>
            <Row gutter={16}>
              <Col span={24}>
                <img
                  alt={'img'}
                  src={
                    'https://e7wei-img.oss-cn-beijing.aliyuncs.com/WechatIMG3.png'
                  }
                  width={'100%'}
                  height={'100%'}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    shareMsg_value: state.shareMsg_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPreviewView);

import React from 'react';
import { Card, Col, Row } from 'antd';
import FormPreviewView from '../../http/preview/form.page';
import { connect } from 'react-redux';
import { html5_action } from '../../redux/action';
import UpImgPart from '../../common/visual/upload_common';

class EditorPreviewView extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = (state, data) => {
    this.setState({
      visible: false,
    });
    if (state && data !== undefined) {
      const $$new_html5 = this.props.html5_message_value.data.set('img', data);
      this.props.html5_upData($$new_html5, '', false);
    }
  };

  editorFeatures = data => {
    let $$new_html5;
    if (data.title) {
      $$new_html5 = this.props.html5_message_value.data.setIn(
        ['title', 'value'],
        data.title.value
      );
    }
    if (data.content) {
      $$new_html5 = this.props.html5_message_value.data.setIn(
        ['content', 'value'],
        data.content.value
      );
    }
    this.props.html5_upData($$new_html5, '', false);
  };

  render() {
    const $$img = this.props.html5_message_value.data.get('img');
    const $$data = this.props.html5_message_value.data;
    return (
      <Row>
        <Col>
          <Card title="微信分享设置">
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
                onClick={this.showModal}
              >
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
              </Col>
              <Col span={17}>
                <br />
                <span onClick={this.showModal}>点击更换图片</span>
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
              <UpImgPart
                visible={this.state.visible}
                unvisible={this.closeModal.bind(this)}
                img={$$img}
              />
            </Row>
          </Card>
          <Card title="微信显示效果" style={{ width: '100%' }}>
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
    up_img_value: state.up_img_reducer,
    html5_message_value: state.html5_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    html5_upData: (data, mete, error) =>
      dispatch(html5_action(data, mete, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPreviewView);

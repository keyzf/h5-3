import React, { PureComponent } from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux';
import FormPreviewView from './_form';
import UploadImg from '../../../components/upLoad/imgModel';
import { redux_action } from '../../../redux/action';

class EditorPreviewView extends PureComponent {
  changImgToChild = data => {
    const $$img = this.props.shareMsg_value.data.set('cover', data);
    this.props.upData('SHARE_MSG', $$img);
  };

  editorFeatures = data => {
    let $$new_html5;
    if (data.title) {
      $$new_html5 = this.props.shareMsg_value.data.set(
        'title',
        data.title.value
      );
    }
    if (data.desc) {
      $$new_html5 = this.props.shareMsg_value.data.set('desc', data.desc.value);
    }
    this.props.upData('SHARE_MSG', $$new_html5);
  };

  render() {
    const $$img = this.props.shareMsg_value.data.get('cover');
    const $$data = this.props.shareMsg_value.data;
    return (
      <React.Fragment>
        <Card
          title="微信分享设置"
          style={{
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
                width: '105px',
                border: '1px solid #e7e7e7',
                textAlign: 'center',
                color: '#e7e7e7',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <UploadImg
                type={3}
                func={this.changImgToChild}
                img_url={$$img}
                children={
                  <img
                    style={{
                      verticalAlign: 'middle',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      margin: 'auto',
                    }}
                    src={$$img}
                    alt={'img'}
                  />
                }
              />
            </Col>
            <Col span={17}>
              <br />
              <UploadImg
                type={3}
                func={this.changImgToChild}
                img_url={$$img}
                children={<span onClick={this.showModal}>点击更换图片</span>}
              />
              <br />
              最佳尺寸：200*200像素,jpg/png/gif
            </Col>
            <Col span={24}>
              <br />
              <FormPreviewView
                desc={{ value: $$data.get('desc') }}
                title={{ value: $$data.get('title') }}
                onChange={this.editorFeatures}
              />
            </Col>
          </Row>
        </Card>
        <Card title="微信显示效果">
          <Row gutter={16}>
            <Col span={24}>
              <img
                alt={'img'}
                src={'http://src.e7wei.com/0.6405794268218221.png'}
                width={'100%'}
                height={'100%'}
              />
            </Col>
          </Row>
          <br />
          <br />
          <br /> <br />
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 用户分享H5的传播信息
    shareMsg_value: state.shareMsg_rdc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorPreviewView);

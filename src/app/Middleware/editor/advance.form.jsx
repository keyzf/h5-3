import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import {
  Button,
  Checkbox,
  Popover,
  Icon,
  Row,
  Col,
  Popconfirm,
  Collapse,
} from 'antd';
import { ImgCropFactory } from '../factory/img_cropfactory';
import UploadImg from '../upload/upload_img.upload';
import { redux_action } from '../../../database/redux/action';

class AdvanceForm extends PureComponent {
  changImgToChild = data => {
    const $$img = this.props.data.setIn(['advance', 'img'], data);
    const $$crop_img = $$img.setIn(['advance', 'crop_img'], data);
    this.sendAction($$crop_img);
  };
  cropImgToChild = data => {
    let $$new_img = this.props.data.getIn(['advance', 'img']);
    $$new_img =
      $$new_img +
      `?imageMogr2/crop/!${data.width}x${data.height}a${data.x}a${data.y}`;
    const $$bg_new = this.props.data.setIn(['advance', 'crop_img'], $$new_img);
    this.sendAction($$bg_new);
  };
  editorFeatures = (opt_name, data) => {
    if (opt_name === 'color') {
      this.sendAction(this.props.data.setIn(['advance', 'color'], data.hex));
    }
    if (opt_name === 'style_color') {
      this.sendAction(
        this.props.data.setIn(['advance', 'style_color'], data.hex)
      );
    }
    if (opt_name === 'delete') {
      const $$bg_new = this.props.data.setIn(['advance', 'img'], '');
      const $$bg_crop = $$bg_new.setIn(['advance', 'crop_img'], '');
      this.sendAction($$bg_crop);
    }
    if (opt_name === 'tiling') {
      this.sendAction(
        this.props.data.setIn(
          ['advance', 'img_config', 'tiling', 'value'],
          data.target.checked
        )
      );
    }
    if (opt_name === 'stretching') {
      this.sendAction(
        this.props.data.setIn(
          ['advance', 'img_config', 'stretching', 'value'],
          data.target.checked
        )
      );
    }
  };
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    const $$advance = this.props.data.get('advance');
    const Panel = Collapse.Panel;
    return (
      <Collapse
        bordered={false}
        defaultActiveKey={['1', '2', '3']}
        style={{ background: 'transparent' }}
      >
        {this.props.name === 'button' ? (
          ''
        ) : (
          <Panel header="背景色" key="1">
            <Popover
              content={
                <SketchPicker
                  color={$$advance.get('color')}
                  onChangeComplete={this.editorFeatures.bind(this, 'color')}
                />
              }
              trigger="click"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '80px',
                  width: '150px',
                  border: '1px black solid',
                  background: $$advance.get('color'),
                }}
              >
                <Icon type="plus" />&nbsp;&nbsp;自定义
              </div>
            </Popover>
          </Panel>
        )}
        {this.props.name === 'button' ? (
          ''
        ) : (
          <Panel header="搭配色" key="3">
            <Popover
              content={
                <SketchPicker
                  color={$$advance.get('style_color')}
                  onChangeComplete={this.editorFeatures.bind(
                    this,
                    'style_color'
                  )}
                />
              }
              trigger="click"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '80px',
                  width: '150px',
                  border: '1px black solid',
                  background: $$advance.get('style_color'),
                }}
              >
                <Icon type="plus" />&nbsp;&nbsp;自定义
              </div>
            </Popover>
          </Panel>
        )}
        <Panel header="背景图" key="2">
          <Row gutter={16}>
            <Col
              span={7}
              style={{
                margin: 'auto',
                height: '100px',
                border: '1px solid black',
                textAlign: 'center',
                color: '#e7e7e7',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <UploadImg
                type={1}
                func={this.changImgToChild}
                img_url={$$advance.get('img')}
                children={
                  <img
                    style={{
                      verticalAlign: 'middle',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      margin: 'auto',
                    }}
                    src={
                      $$advance.get('crop_img')
                        ? $$advance.get('crop_img')
                        : 'http://src.e7wei.com/0.2823198691104869.png'
                    }
                    alt={'img'}
                  />
                }
              />
            </Col>
            <Col span={10}>
              <UploadImg
                type={1}
                func={this.changImgToChild}
                img_url={$$advance.get('img')}
                children={<Button style={{ width: '100%' }}>更换</Button>}
              />
              <ImgCropFactory
                func={this.cropImgToChild}
                children={
                  <Button style={{ width: '100%' }} onClick={this.showModal}>
                    裁剪
                  </Button>
                }
                img_url={$$advance.get('img')}
              />
              <Popconfirm
                placement="bottom"
                title={'确定删除此图片？'}
                onConfirm={this.editorFeatures.bind(this, 'delete')}
                okText="确认"
                cancelText="取消"
              >
                <Button style={{ width: '100%' }}>删除</Button>
              </Popconfirm>
            </Col>
            <Col span={7}>
              <Checkbox
                onChange={this.editorFeatures.bind(this, 'tiling')}
                defaultValue={$$advance.getIn([
                  'img_config',
                  'tiling',
                  'value',
                ])}
              >
                拉伸
              </Checkbox>
              <br />
              <Checkbox
                onChange={this.editorFeatures.bind(this, 'stretching')}
                defaultValue={$$advance.getIn([
                  'img_config',
                  'stretching',
                  'value',
                ])}
              >
                平铺
              </Checkbox>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
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
)(AdvanceForm);

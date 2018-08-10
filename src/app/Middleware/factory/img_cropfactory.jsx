import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

/**
 * 图片裁剪组件
 *  1. 需要传到下去的运行函数
 *  2. 图片路径
 */
class ImgCropFactory extends PureComponent {
  state = {
    visual: false,
    new_crop: {
      x: '',
      y: '',
      width: '',
      height: '',
    },
  };
  showModel = () => {
    this.setState({
      visual: true,
    });
  };
  closeModel = () => {
    this.props.func(this.state.new_crop);
    this.setState({
      visual: false,
    });
  };
  onCropChange = event => {
    const size = {
      x: event.detail.x >= 0 ? event.detail.x : 0,
      y: event.detail.y >= 0 ? event.detail.y : 0,
      width: event.detail.width,
      height: event.detail.height,
    };
    this.setState({ new_crop: size });
  };

  render() {
    return (
      <React.Fragment>
        <span onClick={this.showModel}>{this.props.children}</span>
        <Modal
          width={500}
          title="图片裁剪"
          visible={this.state.visual}
          onCancel={this.closeModel}
          onOk={this.closeModel}
          okText={'裁剪'}
          cancelText={'取消'}
        >
          <Cropper
            ref="cropper"
            src={this.props.img_src}
            style={{ height: 180, width: '100%' }}
            crop={this.onCropChange}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export { ImgCropFactory };

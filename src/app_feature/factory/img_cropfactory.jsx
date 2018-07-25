import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import ReactCrop from 'react-image-crop';
import { img_size } from '../tool/img_size.tool';

/**
 * 图片裁剪组件
 *  1. 需要传到下去的运行函数
 *  2. 图片路径
 */
class ImgCropFactory extends PureComponent {
  state = {
    visual: false,
    crop: {
      x: 10,
      y: 10,
      width: 80,
      height: 80,
    },
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
  onCropChange = crop => {
    this.setState({ crop });
    const $$img_size = img_size(this.props.img_url);
    const size = {
      x: crop.x / 100 * $$img_size.width,
      y: crop.y / 100 * $$img_size.height,
      width: crop.width / 100 * $$img_size.width,
      height: crop.height / 100 * $$img_size.height,
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
          <ReactCrop
            src={this.props.img_url}
            crop={this.state.crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export { ImgCropFactory };

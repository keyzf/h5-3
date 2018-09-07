import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

/**
 * 图片裁剪组件
 *  1. 需要传到下去的运行函数
 *  2. 图片路径
 */
export class ImgCropFactory extends PureComponent {
  state = {
    visual: false, // 展示裁剪Model
    crop: {
      x: null,
      y: null,
      width: null,
      height: null,
    }, // 裁剪后的图片数据
  };
  /**
   * 展示裁剪Model
   */
  showModel = () => {
    this.setState({
      visual: true,
    });
  };
  /**
   * 关闭裁剪Model
   * 将裁剪后的数据提交给父级函数处理
   */
  closeModel = () => {
    this.setState({
      visual: false,
    });
    this.props.func(this.state.crop);
  };
  /**
   * 图片裁剪数据变更
   * @param event
   */
  onCropChange = event => {
    this.setState({
      crop: {
        x: event.detail.x >= 0 ? event.detail.x : 0,
        y: event.detail.y >= 0 ? event.detail.y : 0,
        width: event.detail.width,
        height: event.detail.height,
      },
    });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

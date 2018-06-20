import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Modal } from "antd";
import { img_size } from "../toolkit/img_size";


export class ImgCrop extends React.Component {
  state = {
    crop: {
      x: 10,
      y: 10,
      width: 80,
      height: 80
    },
    new_crop: {
      x: "",
      y: "",
      width: "",
      height: ""
    }
  };


  onCropChange = crop => {
    this.setState({ crop });
    const $$img_size = img_size(this.props.src);
    const size = {
      x: crop.x / 100 * $$img_size.width,
      y: crop.y / 100 * $$img_size.height,
      width: crop.width / 100 * $$img_size.width,
      height: crop.height / 100 * $$img_size.height
    };
    this.setState({ new_crop: size });
  };

  render() {
    const { crop_visible, crop_unvisible, src } = this.props;
    return (
      <Modal
        width={500}
        title="图片裁剪"
        visible={crop_visible}
        onCancel={crop_unvisible.bind(this, true, this.state.new_crop)}
        onOk={crop_unvisible.bind(this, true, this.state.new_crop)}
        okText={"裁剪"}
        cancelText={"取消"}
      >
        <ReactCrop
          src={src}
          crop={this.state.crop}
          onImageLoaded={this.onImageLoaded}
          onComplete={this.onCropComplete}
          onChange={this.onCropChange}
        />
      </Modal>

    );
  }
}

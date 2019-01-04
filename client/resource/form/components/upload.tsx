import * as React from "react";
import { Form, Upload, Icon, Modal, message } from "antd";

interface Props {
  change: any;
  index: number;
  data: {
    option: [];
    title: string;
    title_color: string;
    font_color: string;
    option_color: string;
  };
}

class FormOptUpLoad extends React.Component<Props, any> {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  /**
   * 上传前审核
   * @param file
   * @returns {boolean}
   */
  beforeUpload = file => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif";
    if (!isJPG) {
      message.error("图片格式只能为png或jpg");
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("上传图片过大，不超过10M");
    }

    return isJPG && isLt10M;
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ file, fileList }) => {
    this.setState({ fileList });
    if (file.status === "done") {
      if (file.response.error) {
        message.error(file.response.msg);
      } else {
        message.success(`${file.name} 文件上传成功.`);

        this.props.change(this.props.index, {
          isLegal: true,
          legalMsg: "",
          data: file.response.url
        });
      }
    }
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { title, title_color } = this.props.data;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    return (
      <Form.Item label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <div className="clearfix">
          <Upload
            action={`${window.location.origin}/view/uploadify`}
            listType="picture-card"
            fileList={fileList}
            beforeUpload={this.beforeUpload}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      </Form.Item>
    );
  }
}

export default FormOptUpLoad;

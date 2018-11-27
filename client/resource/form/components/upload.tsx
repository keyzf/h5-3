import * as React from "react";
import { Form, Upload, Icon, Modal } from "antd";

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

interface State {
  previewVisible: boolean;
  previewImage: string;
}

class FormOptUpLoad extends React.Component<Props, State> {
  state = {
    previewVisible: false,
    previewImage: ""
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file:any) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = (data:any) => {
    console.log(data);
  };

  render() {
    const FormItem = Form.Item;
    const { previewVisible, previewImage } = this.state;
    const { option, title, title_color } = this.props.data;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    const fileList:any = [];
    if (option) {
      option.map((data, index) => {
        fileList.push({
          uid: index,
          name: `图片${index}`,
          status: "done",
          url: data
        });
      });
    }

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <div className="clearfix">
          <Upload
            action=""
            listType="picture-card"
            fileList={fileList}
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
      </FormItem>
    );
  }
}

export default FormOptUpLoad;

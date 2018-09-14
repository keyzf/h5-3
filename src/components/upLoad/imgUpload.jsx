import React, { PureComponent } from 'react';
import { Form, Upload, message } from 'antd';

class UploadImgForm extends PureComponent {
  beforeUpload = file => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('图片格式只能为png或jpg');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('上传图片过大，不超过2M');
    }
    return isJPG && isLt2M;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const upload_props = {
      accept: 'image/*',
      name: 'file',
      action: `${window.location.origin}/material/uploadify`,
      data: { type: 1 },
      showUploadList: false,
      beforeUpload: this.beforeUpload,
      multiple: true,
    };
    return (
      <Form hideRequiredMark>
        <Form.Item>
          {getFieldDecorator('upload')(
            <Upload {...upload_props}>{this.props.child}</Upload>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      upload: Form.createFormField({
        ...props.upload,
        value: props.upload.value,
      }),
    };
  },
})(UploadImgForm);

import React, { PureComponent } from 'react';
import { Form, Upload, message } from 'antd';
import { uploadToken } from '../tool/qiniu.tool';

class UploadImgForm extends PureComponent {
  beforeUpload = file => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('图片格式只能为png或jpg');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('上传图片过大，不超过2');
    }
    return isJPG && isLt2M;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const upload_props = {
      name: 'file',
      action: 'http://upload.qiniup.com',
      showUploadList: false,
      data: { token: uploadToken, key: Math.random() + '.png' },
      accept: 'image/*',
      beforeUpload: this.beforeUpload,
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

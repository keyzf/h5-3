import React, { PureComponent } from 'react';
import { Form, Upload } from 'antd';
import { uploadToken } from '../tool/qiniu.tool';

class MusicForm extends PureComponent {
  /**
   * 内存泄漏
   * @returns {*}
   */
  render() {
    const { getFieldDecorator } = this.props.form;
    const upload_props = {
      name: 'file',
      action: 'http://upload.qiniup.com',
      showUploadList: false,
      data: { token: uploadToken },
      accept: 'audio/*',
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
})(MusicForm);
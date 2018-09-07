import React, { PureComponent } from 'react';
import { Form, Upload } from 'antd';

class MusicForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    const upload_props = {
      name: 'file',
      action: `${window.location.origin}/material/uploadify`,
      data: { type: 4 },
      showUploadList: false,
      accept: 'audio/*',
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
})(MusicForm);

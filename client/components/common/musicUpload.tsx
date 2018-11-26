import React, { PureComponent } from "react";
import { Form, Upload } from "antd";

class UpLoadMusic extends PureComponent<any, any> {
  render() {
    const { getFieldDecorator } = this.props.form;
    const upload_props = {
      name: "file",
      action: `${window.location.origin}/material/uploadify`,
      data: { type: 4 },
      showUploadList: false,
      accept: "audio/*",
      multiple: true
    };
    return (
      <Form hideRequiredMark>
        <Form.Item>
          {getFieldDecorator("upload")(
            <Upload {...upload_props}>{this.props.children}</Upload>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  onFieldsChange(props: any, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props: any) {
    return {
      upload: Form.createFormField({
        ...props.upload,
        value: props.upload.value
      })
    };
  }
})(UpLoadMusic);

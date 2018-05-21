import React from "react";
import { Form, Upload, message, Icon } from "antd";
import { uploadToken } from "../../toolkit/qiniu_upload";


export const ImgForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      upload: Form.createFormField({
        ...props.upload,
        value: props.upload.value
      })
    };
  }
})(props => {
  const { getFieldDecorator } = props.form;
  const upload_props = {
    name: "file",
    action: "http://up.qiniup.com",

    showUploadList: false,
    data: { token: uploadToken },
    onChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {

      }
      if (status === "done") {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (status === "error") {
        message.error(`${info.file.name} 文件上传失败`);
      }
    }
  };

  return (
    <Form hideRequiredMark>
      <Form.Item >
        {getFieldDecorator("upload")(
          <Upload {...upload_props}>
            {props.child}
          </Upload>
        )}
      </Form.Item>
    </Form>
  );
});

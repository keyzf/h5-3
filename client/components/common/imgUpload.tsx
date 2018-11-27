import * as React from "react";
import { Form, Upload, message } from "antd";


const UpLoadImg = React.memo((props: any) => {
  const beforeUpload = (file:any) => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJPG) {
      message.error("图片格式只能为png或jpg");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("上传图片过大，不超过2M");
    }
    return isJPG && isLt2M;
  };
  const { getFieldDecorator } = props.form;
  const upload_props = {
    accept: "image/*",
    name: "file",
    action: `${window.location.origin}/material/uploadify`,
    data: { type: 1 },
    showUploadList: false,
    beforeUpload: beforeUpload,
    multiple: true
  };
  return (
    <Form>
      <Form.Item>
        {getFieldDecorator("upload")(
          <Upload {...upload_props}>
            {props.children}
          </Upload>
        )}
      </Form.Item>
    </Form>

  );
});


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
})(UpLoadImg);

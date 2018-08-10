import React from 'react';
import { Form, Input } from 'antd';

class FormPreviewView extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="分享标题">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Username is required!' }],
          })(<Input placeholder="请输入标题" />)}
        </Form.Item>
        <Form.Item label="分享描述">
          {getFieldDecorator('desc', {
            rules: [{ required: true, message: 'Username is required!' }],
          })(
            <Input.TextArea
              rows={4}
              placeholder="我用易企微做了一个H5页面，你来看看吧！"
            />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  mapPropsToFields(props) {
    return {
      desc: Form.createFormField({
        ...props.desc,
        value: props.desc.value,
      }),
      title: Form.createFormField({
        ...props.title,
        value: props.title.value,
      }),
    };
  },
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
})(FormPreviewView);

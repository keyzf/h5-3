import React from 'react';
import { Form, Input } from 'antd';

class FormPreviewView extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="标题">
          {getFieldDecorator('title')(<Input />)}
        </Form.Item>
        <Form.Item label="描述">
          {getFieldDecorator('content')(<Input.TextArea rows={4} />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  mapPropsToFields(props) {
    return {
      content: Form.createFormField({
        ...props.content,
        value: props.content.value,
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

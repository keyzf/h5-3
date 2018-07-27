import React from 'react';
import { Form, Input } from 'antd';

class FormPreviewView extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="标题">
          {getFieldDecorator('title')(<Input placeholder="请输入标题" />)}
        </Form.Item>
        <Form.Item label="描述">
          {getFieldDecorator('desc')(
            <Input.TextArea rows={4} placeholder="请输入推广简介" />
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

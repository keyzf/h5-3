import React from 'react';
import { Form, Input } from 'antd';

export const FormItemForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        ...props.title,
        value: props.title.value,
      }),
    };
  },
})(props => {
  const { getFieldDecorator } = props.form;
  // 表单选项显示样式
  const form_item_style = label_name => {
    return {
      label: label_name,
      labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
      wrapperCol: {
        xl: { span: 17, offset: 1 },
        lg: { span: 18, offset: 1 },
      },
    };
  };
  return (
    <Form hideRequiredMark>
      <Form.Item {...form_item_style('名称')}>
        {getFieldDecorator('title')(<Input />)}
      </Form.Item>
    </Form>
  );
});

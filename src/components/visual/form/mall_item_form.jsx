import React from 'react';
import { Form, Input } from 'antd';

class ImgItemForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
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
        <Form.Item {...form_item_style('图片长度')}>
          {getFieldDecorator('height')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('图片宽度')}>
          {getFieldDecorator('width')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('图片链接')}>
          {getFieldDecorator('img_url')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('标题')}>
          {getFieldDecorator('title')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('内容')}>
          {getFieldDecorator('content')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('现价')}>
          {getFieldDecorator('current')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('原价')}>
          {getFieldDecorator('original')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('按钮内容')}>
          {getFieldDecorator('btn_content')(<Input />)}
        </Form.Item>
        <Form.Item {...form_item_style('按钮链接')}>
          {getFieldDecorator('btn_url')(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  // 双向绑定
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  // 接口数据
  mapPropsToFields(props) {
    return {
      width: Form.createFormField({
        ...props.width,
        value: props.width.value,
      }),
      height: Form.createFormField({
        ...props.height,
        value: props.height.value,
      }),
      content: Form.createFormField({
        ...props.content,
        value: props.content.value,
      }),
      title: Form.createFormField({
        ...props.title,
        value: props.title.value,
      }),
      current: Form.createFormField({
        ...props.current,
        value: props.current.value,
      }),
      original: Form.createFormField({
        ...props.original,
        value: props.original.value,
      }),
      btn_content: Form.createFormField({
        ...props.btn_content,
        value: props.btn_content.value,
      }),
      btn_url: Form.createFormField({
        ...props.btn_url,
        value: props.btn_url.value,
      }),
      img_url: Form.createFormField({
        ...props.img_url,
        value: props.img_url.value,
      }),
    };
  },
})(ImgItemForm);

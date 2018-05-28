import React from "react";
import { Form, Input } from "antd";

class ImgItemForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const form_item_style = label_name => {
      return {
        label: label_name,
        labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
        wrapperCol: {
          xl: { span: 17, offset: 1 },
          lg: { span: 18, offset: 1 }
        }
      };
    };

    return (
      //TODO 这里报错需要后期处理
      <Form hideRequiredMark>
        <Form.Item {...form_item_style("图片长度")}>
          {getFieldDecorator("height")(
            <Input/>)}
        </Form.Item>
        <Form.Item {...form_item_style("图片宽度")}>
          {getFieldDecorator("width")(
            <Input/>)}
        </Form.Item>
        <Form.Item {...form_item_style("标题")}>
          {getFieldDecorator("title")(
            <Input/>)}
        </Form.Item>
        <Form.Item {...form_item_style("内容")}>
          {getFieldDecorator("content")(
            <Input/>)}
        </Form.Item>
        <Form.Item {...form_item_style("图片链接")}>
          {getFieldDecorator("link")(
            <Input/>)}
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
        value: props.width.value
      }),
      height: Form.createFormField({
        ...props.height,
        value: props.height.value
      }),
      link: Form.createFormField({
        ...props.link,
        value: props.link.value
      }),
      content: Form.createFormField({
        ...props.content,
        value: props.content.value
      }),
      title: Form.createFormField({
        ...props.title,
        value: props.title.value
      })
    };
  }
})(ImgItemForm);

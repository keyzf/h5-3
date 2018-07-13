/**
 * img 单项 表单
 */
import React, { PureComponent } from 'react';
import { Form, Input, InputNumber } from 'antd';

/**
 * img 单项 表单
 */
class ImgItemForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
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
          {getFieldDecorator('height')(
            <InputNumber min={0} max={1000} style={{ width: '100%' }} />
          )}
        </Form.Item>
        <Form.Item {...form_item_style('图片宽度')}>
          {getFieldDecorator('width')(
            <InputNumber min={0} max={1000} style={{ width: '100%' }} />
          )}
        </Form.Item>
        {this.props.name === 'single_img' ? (
          <Form.Item {...form_item_style('备注')}>
            {getFieldDecorator('title')(<Input />)}
          </Form.Item>
        ) : (
          <Form.Item {...form_item_style('标题')}>
            {getFieldDecorator('title')(<Input />)}
          </Form.Item>
        )}
        {this.props.name === 'single_img' ? (
          ''
        ) : (
          <Form.Item {...form_item_style('内容')}>
            {getFieldDecorator('content')(<TextArea rows={4} />)}
          </Form.Item>
        )}
        <Form.Item {...form_item_style('链接')}>
          {getFieldDecorator('link')(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

/**
 * 高阶组件 hoc
 */
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
      link: Form.createFormField({
        ...props.link,
        value: props.link.value,
      }),
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
})(ImgItemForm);

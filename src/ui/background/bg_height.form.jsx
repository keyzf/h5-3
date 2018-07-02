import React from 'react';
import { Form, Slider } from 'antd';

class BgHeightForm extends React.Component {
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
        <Form.Item {...form_item_style('背景长度')}>
          {getFieldDecorator('height')(<Slider max={4000} min={0} />)}
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
      height: Form.createFormField({
        ...props.height,
        value: props.height.value,
      }),
    };
  },
})(BgHeightForm);

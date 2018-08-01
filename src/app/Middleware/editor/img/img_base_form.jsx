/**
 * img 基础设置
 */
import React, { PureComponent } from 'react';
import { Form, InputNumber, Checkbox } from 'antd';

/**
 * 可操作表单项
 */
class ImgBaseForm extends PureComponent {
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
    const plainOptions = ['标题', '内容'];
    return (
      <Form hideRequiredMark>
        <Form.Item {...form_item_style('元素隐藏')}>
          {getFieldDecorator('show_element')(
            <Checkbox.Group options={plainOptions} />
          )}
        </Form.Item>
        {this.props.name === 'grid_img' || this.props.name === 'list_img' ? (
          <Form.Item {...form_item_style('布局')}>
            一行显示{getFieldDecorator('layout')(
              <InputNumber min={1} max={4} />
            )}{' '}
            个
          </Form.Item>
        ) : (
          ''
        )}
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
      show_element: Form.createFormField({
        ...props.show_element,
        value: props.show_element.value,
      }),

      layout: Form.createFormField({
        ...props.layout,
        value: props.layout.value,
      }),
    };
  },
})(ImgBaseForm);

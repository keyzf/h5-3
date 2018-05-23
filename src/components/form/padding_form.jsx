import React, {Component} from 'react';
import {Form, Slider} from 'antd';

/**
 * 内边距
 * 实现功能：
 * 上、下、左、右方向的可操作表单项
 */
class PaddingForm extends Component {
    render() {
        // 表单的单个项目
        const FormItem = Form.Item;
        // getFieldDecorator : 用于和表单进行双向绑定
        const {getFieldDecorator} = this.props.form;
        // 表单选项 '布局' 样式
        const form_item_style = (label_name) => {
            return {
                label: label_name,
                labelCol: {xl: {span: 5, offset: 1}, lg: {span: 5, offset: 1}},
                wrapperCol: {
                    xl: {span: 17, offset: 1},
                    lg: {span: 18, offset: 1},
                },
            };
        };
        return (
            <Form hideRequiredMark>
                <FormItem {...form_item_style('上边距')}>
                    {getFieldDecorator('top')(<Slider min={0} max={1000}/>)}
                </FormItem>
                <FormItem {...form_item_style('下边距')} >
                    {getFieldDecorator('bottom')(<Slider min={0} max={1000}/>)}
                </FormItem>
                <FormItem {...form_item_style('左边距')}>
                    {getFieldDecorator('left')(<Slider min={0} max={1000}/>)}
                </FormItem>
                <FormItem {...form_item_style('右边距')}>
                    {getFieldDecorator('right')(<Slider min={0} max={1000}/>)}
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            top: Form.createFormField({
                ...props.top,
                value: props.top.value,
            }),
            left: Form.createFormField({
                ...props.left,
                value: props.left.value,
            }),
            bottom: Form.createFormField({
                ...props.bottom,
                value: props.bottom.value,
            }),
            right: Form.createFormField({
                ...props.right,
                value: props.right.value,
            }),
        };
    },
})(PaddingForm);




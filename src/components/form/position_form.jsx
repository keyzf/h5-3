import React, {Component} from 'react';
import {Form, Slider} from 'antd';
/**
 * 定位
 * 实现功能：
 * 图层、上、下、左、右方向的可操作表单项
 * 同一时刻，上与下，左与右，中只能有一个起作用，其主要原因在于css中定位 position 属性的作用
 * 例如:
 *       上 左
 *       上 右
 *       下 左
 *       下 右
 */
class PositionForm extends Component {
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
                <FormItem {...form_item_style('图层位置')}>
                    {getFieldDecorator('depth')(
                        <Slider min={0} max={360} marks={{0: '置下', 180: '置中', 360: '置上'}}/>
                    )}
                </FormItem>
                <FormItem {...form_item_style('定位下移')}>
                    {getFieldDecorator('top')(<Slider min={0} max={1000}/>)}
                </FormItem>
                <FormItem {...form_item_style('定位上移')}>
                    {getFieldDecorator('bottom')(<Slider min={0} max={1000}/>)}
                </FormItem>
                <FormItem {...form_item_style('定位右移')}>
                    {getFieldDecorator('left')(<Slider min={0} max={1000}/>)}
                </FormItem>
                <FormItem {...form_item_style('定位左移')}>
                    {getFieldDecorator('right')(<Slider min={0} max={1000}/>)}
                </FormItem>
            </Form>
        );
    }
}

export default  Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            top: Form.createFormField({
                ...props.top,
                value: props.top.value,
            }),
            depth: Form.createFormField({
                ...props.depth,
                value: props.depth.value,
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
})(PositionForm);


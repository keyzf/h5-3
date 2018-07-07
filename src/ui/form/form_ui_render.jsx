/**
 * form_ui 组件渲染组件
 * 只需要传递数据进来即可
 */
import React, { PureComponent } from 'react';
import {
  Form,
  Button,
  Radio,
  Input,
  Rate,
  DatePicker,
  Checkbox,
  Upload,
  Icon,
} from 'antd';
import { uploadToken } from '../../toolkit/qiniu_upload';
// import axios from "axios";
// import { fromJS, List } from "immutable";

class CoreForm extends PureComponent {
  /**
   * TODO 将信息提交至指定 ajax 中
   * @param e
   */
  handleSubmit = e => {
    //{{title:'',value:''},{title:'',value:''},{title:'',value:''}}
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 将信息发送给指定url
        // axios.post('this.props.data.getIn(["customize","btn_url"])', {
        //   form_data: List(fromJS(values)).toJS(),
        // })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const customize = this.props.data.get('customize');
    const btn_color = customize.get('btn_color');
    const btn_bg_color = customize.get('btn_bg_color');
    /**
     * form 表单配置项
     */
    const form_config = {
      onSubmit: this.handleSubmit.bind(this),
      layout: 'vertical',
      hideRequiredMark: true,
    };
    /**
     * 表单选项显示样式
     * @param label_name
     * @param color
     * @returns {{label: *, wrapperCol: {lg: {span: number, offset: number}}}}
     */
    const form_item_style = (label_name, color) => {
      return {
        label: <div style={{ color: color }}>{label_name}</div>,
        wrapperCol: { lg: { span: 24 } },
      };
    };
    const upload_props = {
      name: 'file',
      action: 'http://upload.qiniup.com',
      multiple: true,
      showUploadList: true,
      data: { token: uploadToken, key: Math.random() + '.png' },
      accept: 'image/*',
    };
    /**
     * 渲染表单
     */

    return (
      <Form {...form_config}>
        {customize.get('item').map((data, index) => {
          const opt_color = data.get('opt_color');
          return (
            <div key={index}>
              {data.get('type') === 'radio' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Radio.Group>
                      {data.get('option').map((data, index) => {
                        return (
                          <Radio
                            style={{
                              display: 'block',
                              height: '30px',
                              lineHeight: '30px',
                              color: opt_color,
                            }}
                            value={index}
                            key={index}
                          >
                            {data}
                          </Radio>
                        );
                      })}
                    </Radio.Group>
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'input' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Input
                      size="large"
                      value={data.getIn(['option', 'value'])}
                    />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'rate' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Rate value={data.getIn(['option', 'value'])} />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'checkbox' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Checkbox.Group
                      style={{ color: opt_color }}
                      options={data.get('option').toJS()}
                    />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'datePicker' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <DatePicker value={data.getIn(['option', 'value'])} />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'upload' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Upload.Dragger {...upload_props}>
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit
                        from uploading company data or other band files
                      </p>
                    </Upload.Dragger>
                  )}
                </FormItem>
              ) : (
                ''
              )}
            </div>
          );
        })}
        <FormItem key={'asfdasdf'}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%',
              color: btn_color,
              background: btn_bg_color,
            }}
          >
            {customize.getIn(['btn_content', 'value'])}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const FormUi = Form.create()(CoreForm);

export { FormUi };

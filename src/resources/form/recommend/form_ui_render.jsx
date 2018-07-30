import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
  Select,
  message,
} from 'antd';
import { uploadToken } from '../../../app/Middleware/tool/qiniu.tool';
import { fromJS, List } from 'immutable';
import { form_api } from '../../../api/form.api';

class CoreForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const sid = this.props.sid_value.data.get('sid');
      if (!err) {
        let from = [];
        const data = List(fromJS(values));
        data.map(data => {
          if (List(data[1]).size === 2) {
            from.push({
              name: data[0],
              value:
                'http://src.e7wei.com/' +
                data[1].getIn(['file', 'response', 'key']),
            });
          } else {
            from.push({ name: data[0], value: data[1] });
          }
        });
        form_api(from, sid)
          .then(response => {
            message.success(response);
          })
          .catch(response => {
            message.error(response);
          });
      }
    });
  };

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const customize = this.props.data.get('customize');
    const btn_color = customize.get('btn_color');
    const btn_bg_color = customize.get('btn_bg_color');
    const form_config = {
      onSubmit: this.handleSubmit.bind(this),
      layout: 'vertical',
      hideRequiredMark: true,
    };
    const form_item_style = (label_name, color) => {
      return {
        label: <div style={{ color: color }}>{label_name}</div>,
        wrapperCol: { lg: { span: 24 } },
      };
    };
    const upload_props = {
      name: 'file',
      action: 'http://upload.qiniup.com',
      showUploadList: true,
      data: { token: uploadToken, key: Math.random() + '.png' },
      accept: 'image/*',
      onChange(info) {
        const status = info.file.status;
        if (status === 'done') {
          message.success(`${info.file.name} 文件上传成功.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} 上传失败.`);
        }
      },
    };
    return (
      <Form {...form_config}>
        {customize.get('item').map((data, index) => {
          const opt_color = data.get('opt_color');
          return (
            <div
              key={index}
              style={{ pointerEvents: `${this.props.pointer ? 'none' : ''}` }}
            >
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
                            setFieldsValue={index}
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
                    <Input size="large" />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'select' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Select size="large">
                      {data.get('option').map((data, index) => {
                        return (
                          <Select.Option value={data} key={index}>
                            {data}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'textarea' ? (
                <FormItem
                  {...form_item_style(
                    `${data.getIn(['title', 'value'])}`,
                    data.get('title_color')
                  )}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Input.TextArea size="large" rows={4} />
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
                  {getFieldDecorator(`${data.get('decorator')}`)(<Rate />)}
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
                    <DatePicker
                      style={{ width: '100%' }}
                      size="large"
                      placeholder="选择日期"
                    />
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
                      <p className="ant-upload-hint">
                        将文件拖拽至此框或点击上传
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
        <FormItem
          key={'asfdasdf'}
          style={{ pointerEvents: `${this.props.pointer ? 'none' : ''}` }}
        >
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

const mapStateToProps = state => {
  return {
    // 解析url,获取用户id
    sid_value: state.sid_rdc,
  };
};

export default connect(mapStateToProps)(FormUi);

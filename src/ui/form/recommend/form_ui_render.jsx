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
import { fromJS, List } from 'immutable';
import { form_api } from '../../../api/form.api';
import { ImgAtom } from '../../img/img_atom';
import style from './form.module.scss';

class CoreForm extends PureComponent {
  state = {
    loading: false,
    previewImage: '',
    upload_array: [],
    index: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const sid = this.props.sid_value.data.get('sid');
      if (!err) {
        let from = [];
        const data = List(fromJS(values));
        data.map((data, index) => {
          if (this.state.upload_array[index] !== undefined) {
            from.push({
              name: data[0],
              value: this.state.upload_array[index],
            });
            return '';
          } else {
            from.push({ name: data[0], value: data[1] });
            return '';
          }
        });
        from.map((data, index) => {
          let i = '';
          if (List.isList(data.value)) {
            data.value.map(datas => {
              i = i + datas + ',';
              return '';
            });
            from[index].value = i;
            return '';
          }
          return '';
        });
        let form_value = [];
        this.props.h5_data_value.data.map(map_data => {
          if (map_data.getIn(['customize', 'type']) === 'form') {
            map_data.getIn(['customize', 'item']).map((data, index) => {
              form_value[index] = { form_id: data.get('form_id'), value: '' };
              return '';
            });
            return '';
          }
          return '';
        });
        from.map((data, index) => {
          form_value[index] = {
            form_id: form_value[index].form_id,
            value: data.value,
          };
          return '';
        });

        form_api(form_value, sid)
          .then(response => {
            message.success(response);
            return '';
          })
          .catch(response => {
            message.error(response);
            return '';
          });
      }
      return '';
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功.`);
      const array = this.state.upload_array;
      array[this.state.index] =
        'http://src.e7wei.com/' + info.file.response.key;
      this.setState({
        loading: false,
        upload_array: array,
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败.`);
    }
  };

  onRemove = index => {
    let array = this.state.upload_array;
    array[index] = undefined;
    this.setState({
      upload_array: array,
    });
    return true;
  };
  beforeUpload = file => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('图片格式只能为png或jpg');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('上传图片过大，不超过2M');
    }
    this.setState({
      index: file,
    });
    return isJPG && isLt2M;
  };
  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator, getFieldsError } = this.props.form;
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
        label: (
          <div className={style.form_fontSize} style={{ color: color }}>
            {label_name}
          </div>
        ),
        wrapperCol: { lg: { span: 24 } },
      };
    };
    const upload_props = {
      accept: 'image/*',
      name: 'file',
      action: `${window.location.origin}/material/uploadify`,
      data: { type: 1 },
      showUploadList: false,
      beforeUpload: this.beforeUpload,
      multiple: true,
    };
    const advance = this.props.data.get('advance');
    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
    };
    const uploadButton = (
      <div style={{ width: '100%' }}>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">点击上传文件</div>
      </div>
    );

    return (
      <ImgAtom {...advanced_settings}>
        <Form {...form_config}>
          {customize.get('item').map((data, index) => {
            const opt_color = data.get('opt_color');
            switch (data.get('type')) {
              case 'upload':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [
                            { required: true, message: '需上传相应材料' },
                          ],
                        }
                      )(
                        <Upload
                          {...upload_props}
                          onChange={this.handleChange}
                          beforeUpload={this.beforeUpload.bind(this, index)}
                          onRemove={this.onRemove.bind(this, index)}
                        >
                          {this.state.upload_array[index] === undefined
                            ? uploadButton
                            : null}
                        </Upload>
                      )}
                    </FormItem>
                  </div>
                );
              case 'radio':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '请选择' }],
                        }
                      )(
                        <Radio.Group>
                          {data.get('option').map((data, index) => {
                            return (
                              <Radio
                                value={data}
                                key={index}
                                style={{ color: opt_color }}
                              >
                                {data}
                              </Radio>
                            );
                          })}
                        </Radio.Group>
                      )}
                    </FormItem>
                  </div>
                );
              case 'input':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(['option', 'value'])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'name':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(['option', 'value'])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'email':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [
                            {
                              pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                              message: '邮箱格式错误',
                            },
                            { required: true, message: '此项不能为空' },
                          ],
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(['option', 'value'])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'address':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(['option', 'value'])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'phone':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [
                            {
                              pattern: /^((1[3-8][0-9])+\d{8})$/,
                              message: '手机号格式错误',
                            },
                            { required: true, message: '此项不能为空' },
                          ],
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(['option', 'value'])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'select':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <Select
                          size="large"
                          placeholder={`${data.getIn(['option', 0])}`}
                        >
                          {data.get('option').map((data, index) => {
                            return (
                              <Select.Option
                                value={data}
                                key={index}
                                style={{ color: opt_color }}
                              >
                                {data}
                              </Select.Option>
                            );
                          })}
                        </Select>
                      )}
                    </FormItem>
                  </div>
                );
              case 'textarea':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <Input.TextArea
                          size="large"
                          rows={4}
                          placeholder={data.getIn(['option', 'value'])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'rate':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(<Rate />)}
                    </FormItem>
                  </div>
                );
              case 'checkbox':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <Checkbox.Group
                          style={{ color: opt_color }}
                          options={data.get('option').toJS()}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case 'datePicker':
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? 'none' : ''}`,
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(['title', 'value'])}`,
                        data.get('title_color')
                      )}
                    >
                      {getFieldDecorator(
                        `${
                          data.getIn(['title', 'value'])
                            ? data.getIn(['title', 'value'])
                            : '请输入标题'
                        }`,
                        {
                          rules: [{ required: true, message: '此项不能为空' }],
                        }
                      )(
                        <DatePicker
                          style={{ width: '100%' }}
                          size="large"
                          placeholder="选择日期"
                        />
                      )}
                    </FormItem>
                  </div>
                );
              default:
                return '';
            }
          })}
          <FormItem
            key={'asfdasdf'}
            style={{ pointerEvents: `${this.props.pointer ? 'none' : ''}` }}
          >
            <Button
              type="primary"
              htmlType="submit"
              disabled={Object.keys(getFieldsError()).some(
                field => getFieldsError()[field]
              )}
              style={{
                width: '100%',
                border: 'none',
                color: btn_color,
                background: btn_bg_color,
              }}
            >
              {customize.getIn(['btn_content', 'value'])}
            </Button>
          </FormItem>
        </Form>
      </ImgAtom>
    );
  }
}

const FormUi = Form.create()(CoreForm);

const mapStateToProps = state => {
  return {
    // 解析url,获取用户id
    sid_value: state.sid_rdc,
    // 核心组件
    h5_data_value: state.h5Data_rdc,
  };
};

export default connect(mapStateToProps)(FormUi);

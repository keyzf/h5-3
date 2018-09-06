import { fromJS } from 'immutable';
import { random } from '../../utils/random/random';

/**
 * 根级数据函数
 */
const $$form = (item_data, height, width, types) => {
  return fromJS({
    customize: {
      type: 'form',
      types: types,
      name: 'form',
      item: item_data,
      btn_content: { value: '提交' },
      btn_color: 'white',
      btn_bg_color: '',
    },
    advance: {
      color: '',
      img: '',
      crop_img: '',
      live: false,
      move: false,
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      width: width,
      height: height,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100,
    },
  });
};

/**
 * 可供选择的项目
 * @type {function(any): any}
 */
export const $$from_opt_input = form_id => {
  return fromJS({
    type: 'input',
    form_id: form_id,
    title: { value: '输入框' },
    decorator: 'input',
    option: { value: '' },
  });
};
export const $$from_opt_rate = form_id => {
  return fromJS({
    type: 'rate',
    form_id: form_id,
    title: { value: '评分栏' },
    decorator: 'rate',
    option: { value: '' },
  });
};
export const $$from_opt_checkbox = form_id => {
  return fromJS({
    type: 'checkbox',
    form_id: form_id,
    title: { value: '多选框' },
    decorator: 'checkbox',
    option: ['Apple', 'Pear', 'Orange'],
  });
};
export const $$from_opt_datepicker = form_id => {
  return fromJS({
    type: 'datePicker',
    form_id: form_id,
    title: { value: '日期选择' },
    decorator: 'datePicker',
    option: { value: '' },
  });
};
export const $$from_opt_upload = form_id => {
  return fromJS({
    type: 'upload',
    form_id: form_id,
    title: { value: '上传' },
    decorator: 'upload',
    option: { value: '' },
  });
};
export const $$from_opt_name = form_id => {
  return fromJS({
    type: 'name',
    form_id: form_id,
    title: { value: '姓名' },
    decorator: '姓名',
    option: { value: '请输入姓名' },
  });
};
export const $$from_opt_phone = form_id => {
  return fromJS({
    type: 'phone',
    form_id: form_id,
    title: { value: '电话' },
    decorator: '电话',
    option: { value: '请输入电话' },
  });
};
export const $$from_opt_address = form_id => {
  return fromJS({
    form_id: form_id,
    type: 'address',
    title: { value: '地址' },
    decorator: 'address',
    option: { value: '' },
  });
};
export const $$from_opt_email = form_id => {
  return fromJS({
    form_id: form_id,
    type: 'email',
    title: { value: '邮箱' },
    decorator: '邮箱',
    option: { value: '请填写邮箱' },
  });
};
export const $$from_opt_radio = form_id => {
  return fromJS({
    type: 'radio',
    form_id: form_id,
    title: { value: '单选框' },
    decorator: '单选框',
    option: ['选项一', '选项二', '选项三'],
  });
};

/**
 * 推荐组件
 * @type {any}
 */
const one_template = fromJS([
  $$from_opt_name(random()),
  $$from_opt_phone(random()),
  {
    type: 'textarea',
    form_id: random(),
    title_color: '#000',
    opt_color: '#000',
    title: { value: '备注' },
    decorator: '备注',
    option: { value: '请填写备注' },
  },
]);
const two_template = fromJS([
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'radio',
    form_id: random(),
    title: { value: '应聘岗位' },
    decorator: '应聘岗位',
    option: ['管理', '策划', '销售'],
  },
  $$from_opt_name(random()),
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'radio',
    form_id: random(),
    title: { value: '性别' },
    decorator: '性别',
    option: ['男', '女'],
  },
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'datePicker',
    form_id: random(),
    title: { value: '出生日期' },
    decorator: '出生日期',
    option: { value: '' },
  },
  $$from_opt_phone(random()),
  $$from_opt_email(random()),
  {
    type: 'input',
    title_color: '#000',
    form_id: random(),
    opt_color: '#000',
    title: { value: '毕业学校' },
    decorator: '毕业学校',
    option: { value: '请输入毕业学校' },
  },
  {
    type: 'select',
    title_color: '#000',
    form_id: random(),
    opt_color: '#000',
    title: { value: '学历' },
    decorator: '学历',
    option: ['博士', '研究生', '本科', '大专'],
  },
  {
    type: 'textarea',
    title_color: '#000',
    opt_color: '#000',
    form_id: random(),
    title: { value: '工作经历' },
    decorator: '工作经历',
    option: { value: '请输入工作经历' },
  },
]);
const three_template = fromJS([
  $$from_opt_name(random()),
  $$from_opt_phone(random()),
  {
    type: 'input',
    form_id: random(),
    title_color: '#000',
    opt_color: '#000',
    title: { value: '公司' },
    decorator: '公司',
    option: { value: '请填写公司' },
  },
  {
    type: 'input',
    title_color: '#000',
    form_id: random(),
    opt_color: '#000',
    title: { value: '职务' },
    decorator: '职务',
    option: { value: '请填入职务' },
  },
  {
    type: 'checkbox',
    title: { value: '多选框' },
    decorator: '多选框',
    form_id: random(),
    option: [
      '互联网',
      '餐饮/视频',
      '电商/零售',
      '文化/娱乐',
      '美容/时尚',
      '家居/地产',
      '教育/培训',
      '金融/银行',
    ],
  },
]);

export const $$one_form_database = $$form(one_template, 500, 300, '报名');
export const $$two_form_database = $$form(two_template, 1000, 300, '招聘');
export const $$three_form_database = $$form(three_template, 650, 250, '问卷');

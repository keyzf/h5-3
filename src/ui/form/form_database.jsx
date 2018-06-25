import { fromJS } from 'immutable';

/**
 * 根级数据函数
 */
const $$form = (name, item_data, width, height) => {
  return fromJS({
    customize: {
      name: name,
      item: item_data,
    },
    advance: {
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      perimeter: { width: { value: width }, height: { value: height } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  });
};

// 模板组件数据
const template = fromJS([
  {
    type: 'radio',
    title_color: '#000',
    opt_color: '#000',
    title: { value: 'item_one' },
    decorator: 'item_one',
    option: ['题目一', '题目二', '题目三', '题目四'],
  },
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'radio',
    title: { value: 'item_two' },
    decorator: 'item_two',
    option: ['题目一', '题目二', '题目三', '题目四'],
  },
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'radio',
    title: { value: 'item_three' },
    decorator: 'item_three',
    option: ['题目一', '题目二', '题目三', '题目四'],
  },
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'radio',
    title: { value: 'item_four' },
    decorator: 'item_four',
    option: ['题目一', '题目二', '题目三', '题目四'],
  },
]);
export const $$form_database = $$form('form', template, 320, 760);

// 推荐
const one_template = fromJS([
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'input',
    title: { value: '你的姓名' },
    decorator: '你的姓名',
    option: { value: '' },
  },
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'input',
    title: { value: '联系邮箱' },
    decorator: '联系邮箱',
    option: { value: '' },
  },
  {
    title_color: '#000',
    opt_color: '#000',
    type: 'input',
    title: { value: '反馈内容' },
    decorator: '反馈内容',
    option: { value: '' },
  },
]);
export const $$one_form_database = $$form('one_form', one_template, 320, 400);

//创建新数组时使用
export const $$form_item_database = (type, decorator, title, option) => {
  return {
    type: type,
    title: title,
    decorator: decorator,
    option: option,
  };
};

//可供选择的项目
export const $$from_opt_input = fromJS({
  type: 'input',
  title: { value: '输入框' },
  decorator: 'input',
  option: { value: '' },
});

export const $$from_opt_rate = fromJS({
  type: 'rate',
  title: { value: '评分栏' },
  decorator: 'rate',
  option: { value: '' },
});

export const $$from_opt_checkbox = fromJS({
  type: 'checkbox',
  title: { value: '多选框' },
  decorator: 'checkbox',
  option: ['Apple', 'Pear', 'Orange'],
});

export const $$from_opt_datepicker = fromJS({
  type: 'datePicker',
  title: { value: '日期选择' },
  decorator: 'datePicker',
  option: { value: '' },
});

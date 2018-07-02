import { fromJS } from 'immutable';

/**
 * 根级数据函数
 */
const $$form = (name, item_data, height) => {
  return fromJS({
    customize: {
      type: 'form',
      name: name,
      item: item_data,
      btn_content: { value: '提交' },
      btn_color: 'white',
      btn_bg_color: '',
    },
    advance: {
      color: '',
      img: '',
      crop_img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      perimeter: { width: { value: 320 }, height: { value: height } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  });
};
/**
 * 创建新数组时使用
 * @param type
 * @param decorator
 * @param title
 * @param option
 * @returns {{type: *, title: *, decorator: *, option: *}}
 */
const $$form_item_database = (type, decorator, title, option) => {
  return {
    type: type,
    title: title,
    decorator: decorator,
    option: option,
  };
};

/**
 * core组件数据
 * @type {any}
 */
const template = fromJS([
  {
    type: 'radio',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '喜欢的课程' },
    decorator: '喜欢的课程',
    option: ['语文', '数学', '英语', '历史'],
  },
  {
    type: 'radio',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '擅长的计算机语言' },
    decorator: '擅长的计算机语言',
    option: ['c ', 'golang', 'php', 'javascript'],
  },
  {
    type: 'radio',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '最喜欢的运动' },
    decorator: '最喜欢的运动',
    option: ['篮球', '足球', '羽毛球', '游泳'],
  },
]);
const $$form_database = $$form('form', template, 760);

/**
 * 推荐组件
 * @type {any}
 */
const one_template = fromJS([
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '你的姓名' },
    decorator: '你的姓名',
    option: { value: '' },
  },
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '联系邮箱' },
    decorator: '联系邮箱',
    option: { value: '' },
  },
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '反馈内容' },
    decorator: '反馈内容',
    option: { value: '' },
  },
]);
const $$one_form_database = $$form('one_form', one_template, 400);

/**
 * 可供选择的项目
 * @type {any}
 */
const $$from_opt_input = fromJS({
  type: 'input',
  title: { value: '输入框' },
  decorator: 'input',
  option: { value: '' },
});

const $$from_opt_rate = fromJS({
  type: 'rate',
  title: { value: '评分栏' },
  decorator: 'rate',
  option: { value: '' },
});

const $$from_opt_checkbox = fromJS({
  type: 'checkbox',
  title: { value: '多选框' },
  decorator: 'checkbox',
  option: ['Apple', 'Pear', 'Orange'],
});

const $$from_opt_datepicker = fromJS({
  type: 'datePicker',
  title: { value: '日期选择' },
  decorator: 'datePicker',
  option: { value: '' },
});

/**
 * 导出项目
 */
export {
  $$form_database,
  $$one_form_database,
  $$form_item_database,
  $$from_opt_input,
  $$from_opt_rate,
  $$from_opt_checkbox,
  $$from_opt_datepicker,
};

import { fromJS } from 'immutable';

/**
 * 根级数据函数
 */
const $$form = (item_data, height, width) => {
  return fromJS({
    customize: {
      type: 'form',
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
const $$form_database = $$form(template, 600, 300);

/**
 * 推荐组件
 * @type {any}
 */
const one_template = fromJS([
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '用户名' },
    decorator: '用户名',
    option: { value: '' },
  },
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '密码' },
    decorator: '密码',
    option: { value: '' },
  },
]);
const two_template = fromJS([
  {
    type: 'textarea',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '反馈' },
    decorator: '反馈',
    option: { value: '请填写建议信息' },
  },
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '联系邮箱' },
    decorator: '联系邮箱',
    option: { value: '请输入邮箱地址' },
  },
]);
const three_template = fromJS([
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '反馈内容' },
    decorator: '反馈内容',
    option: { value: '请填写反馈内容' },
  },
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '联系邮箱' },
    decorator: '联系邮箱',
    option: { value: '请填入联系信息' },
  },
  {
    type: 'upload',
    title: { value: '身份证正面照片' },
    decorator: 'upload',
    option: { value: '' },
  },
  {
    type: 'upload',
    title: { value: '身份证反面照片' },
    decorator: 'upload',
    option: { value: '' },
  },
]);
const four_template = fromJS([
  {
    type: 'select',
    title: { value: '请选择您最喜欢的一组节目' },
    decorator: '请选择您最喜欢的一组节目',
    option: ['光影一体', '同桌的你', '父亲', '博物馆奇妙夜'],
  },
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '你的姓名' },
    decorator: '你的姓名',
    option: { value: '' },
  },
]);
const five_template = fromJS([
  {
    type: 'input',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '你的姓名' },
    decorator: '你的姓名',
    option: { value: '' },
  },
  {
    type: 'select',
    title: { value: '性别' },
    decorator: '性别',
    option: ['男', '女'],
  },
  {
    type: 'select',
    title: { value: '应聘岗位' },
    decorator: '应聘岗位',
    option: ['前端开发', '后端开发', '运维', 'ui设计师'],
  },
  {
    type: 'textarea',
    title_color: '#000',
    opt_color: '#000',
    title: { value: '工作经历' },
    decorator: '工作经历',
    option: { value: '' },
  },
  {
    type: 'upload',
    title: { value: '简历上传' },
    decorator: '简历上传',
    option: { value: '' },
  },
]);
const six_template = fromJS([
  {
    type: 'rate',
    title: { value: '菜品口味' },
    decorator: '菜品口味',
    option: { value: '' },
  },
  {
    type: 'rate',
    title: { value: '用餐环境' },
    decorator: '用餐环境',
    option: { value: '' },
  },
  {
    type: 'rate',
    title: { value: '整体评价' },
    decorator: '整体评价',
    option: { value: '' },
  },
]);
const seven_template = fromJS([
  {
    type: 'input',
    title: { value: '你的姓名' },
    decorator: '你的姓名',
    option: { value: '' },
  },
  {
    type: 'input',
    title: { value: '你的电话' },
    decorator: '你的电话',
    option: { value: '' },
  },
  {
    type: 'datePicker',
    title: { value: '到点日期' },
    decorator: '到点日期',
    option: { value: '' },
  },
  {
    type: 'datePicker',
    title: { value: '具体时间' },
    decorator: '具体时间',
    option: { value: '' },
  },
  {
    type: 'select',
    title: { value: '预约项目' },
    decorator: '预约项目',
    option: ['项目一', '项目二', '项目三', '项目四'],
  },
]);
const eight_template = fromJS([
  {
    type: 'select',
    title: { value: '性别' },
    decorator: '性别',
    option: ['项目一', '项目二', '项目三', '项目四'],
  },
  {
    type: 'select',
    title: { value: '你所在的城市' },
    decorator: '你所在的城市',
    option: ['南京', '上海', '北京', '深圳'],
  },
  {
    type: 'select',
    title: { value: '你觉得怎样才算一个幸福的人' },
    decorator: '你觉得怎样才算一个幸福的人',
    option: [
      '身心健康',
      '家庭和睦',
      '收入水平高',
      '好的学习工作环境，物质充足',
    ],
  },
]);

const $$one_form_database = $$form(one_template, 300, 300);
const $$two_form_database = $$form(two_template, 361, 241);
const $$three_form_database = $$form(three_template, 710, 300);
const $$four_form_database = $$form(four_template, 300, 300);
const $$five_form_database = $$form(five_template, 710, 300);
const $$six_form_database = $$form(six_template, 340, 300);
const $$seven_form_database = $$form(seven_template, 620, 300);
const $$eight_form_database = $$form(eight_template, 360, 310);

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
const $$from_opt_upload = fromJS({
  type: 'upload',
  title: { value: '上传' },
  decorator: 'upload',
  option: { value: '' },
});

const $$from_opt_name = fromJS({
  type: 'name',
  title: { value: '姓名' },
  decorator: 'name',
  option: { value: '' },
});
const $$from_opt_phone = fromJS({
  type: 'phone',
  title: { value: '电话' },
  decorator: 'phone',
  option: { value: '' },
});
const $$from_opt_address = fromJS({
  type: 'address',
  title: { value: '地址' },
  decorator: 'address',
  option: { value: '' },
});
const $$from_opt_email = fromJS({
  type: 'email',
  title: { value: '邮箱' },
  decorator: 'email',
  option: { value: '' },
});

/**
 * 导出项目
 */
export {
  $$form_database,
  $$from_opt_input,
  $$from_opt_rate,
  $$from_opt_name,
  $$from_opt_phone,
  $$from_opt_address,
  $$from_opt_email,
  $$from_opt_checkbox,
  $$from_opt_datepicker,
  $$from_opt_upload,
  $$one_form_database,
  $$two_form_database,
  $$three_form_database,
  $$four_form_database,
  $$five_form_database,
  $$six_form_database,
  $$seven_form_database,
  $$eight_form_database,
};

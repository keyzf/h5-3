import { fromJS } from 'immutable';
// img 根级数据集函数
const $$img_func_database = (
  name,
  item,
  layout,
  height,
  width,
  content_color,
  font_color
) => {
  return fromJS({
    // 基础编辑属性
    customize: {
      type: 'img',
      name: name,
      item: item,
      model: true,
      base: {
        show_element: { value: undefined }, // 元素显示
        layout: { value: layout }, // 布局
        font_color: font_color, //字体颜色
      },
    },
    // 高级编辑属性
    advance: {
      color: '',
      img: '',
      crop_img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      width: width,
      move: false,
      height: height,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100,
      content_color: content_color,
    },
  });
};

// 添加 img 组件 item 时的数据
const $$img_addItem_database = fromJS({
  img: 'http://src.e7wei.com/0.2823198691104869.png',
  crop_img: 'http://src.e7wei.com/0.2823198691104869.png',
  title: { value: '轮播图' },
  content: {
    value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
  },
  link: { value: '' },
  radius: { value: 0 },
  img_config: {
    stretching: { value: '' },
    tiling: { value: '' },
  },
});

// 1. 单张图片
const $$single_img_database = $$img_func_database(
  'single_img',
  [
    {
      img: '',
      crop_img: '',
      title: { value: '图片备注' },
      content: {
        value: "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>",
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  0,
  213,
  300
);

// 5. 轮播图
const $$carousel_img_database = $$img_func_database(
  'carousel_img',
  [
    {
      img: 'http://src.e7wei.com/90911S36843MURM.png',
      crop_img: 'http://src.e7wei.com/90911S36843MURM.png',
      title: { value: '轮播图' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'http://src.e7wei.com/9091138WT5P2SJR.png',
      crop_img: 'http://src.e7wei.com/9091138WT5P2SJR.png',
      title: { value: '轮播图' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'http://src.e7wei.com/90911SC6849G845.png',
      crop_img: 'http://src.e7wei.com/90911SC6849G845.png',
      title: { value: '轮播图' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'http://src.e7wei.com/90911H26UD946U8.png',
      crop_img: 'http://src.e7wei.com/90911H26UD946U8.png',
      title: { value: '轮播图' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  0,
  165,
  300,
  '',
  '#FFF'
);

export const $$img_re_1 = $$img_func_database(
  'img_re_1',
  [
    {
      img: 'http://7xv429.com1.z0.glb.clouddn.com/mao1.jpg',
      crop_img: 'http://7xv429.com1.z0.glb.clouddn.com/mao1.jpg',
      title: { value: '——易企微' },
      content: {
        value: '微信一站式解决方案',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  0,
  300,
  280,
  '',
  '#000'
);

// 导出
export {
  $$single_img_database,
  $$carousel_img_database,
  $$img_addItem_database,
};

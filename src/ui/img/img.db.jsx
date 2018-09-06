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
// 2. 横排排列图
const $$grid_img_database = $$img_func_database(
  'grid_img',
  [
    {
      img: 'http://src.e7wei.com/0.3528611499486174.png',
      crop_img: 'http://src.e7wei.com/0.3528611499486174.png',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述,这里是图片描述，这里是图片描述',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'http://src.e7wei.com/0.27458586147898956.png',
      crop_img: 'http://src.e7wei.com/0.27458586147898956.png',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述,这里是图片描述，这里是图片描述',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'http://src.e7wei.com/0.9035000016293588.png',
      crop_img: 'http://src.e7wei.com/0.9035000016293588.png',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述,这里是图片描述，这里是图片描述',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'http://src.e7wei.com/0.4045054410741806.png',
      crop_img: 'http://src.e7wei.com/0.4045054410741806.png',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述,这里是图片描述，这里是图片描述',
      },
      link: { value: '' },
      radius: { value: 0 },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  2,
  444,
  273,
  'grey',
  '#000'
);
// 3. 竖排排列图
const $$list_img_database = $$img_func_database(
  'list_img',
  [
    {
      img: 'http://src.e7wei.com/0.35113021335874683.png',
      crop_img: 'http://src.e7wei.com/0.35113021335874683.png',
      title: { value: '这里是图片标题' },
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
      img: 'http://src.e7wei.com/0.2450519793780439.png',
      crop_img: 'http://src.e7wei.com/0.2450519793780439.png',
      title: { value: '这里是图片标题' },
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
      img: 'http://src.e7wei.com/0.8020362485232375.png',
      crop_img: 'http://src.e7wei.com/0.8020362485232375.png',
      title: { value: '这里是图片标题' },
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
  1,
  500,
  300,
  'grey',
  '#000'
);
// 4. 滑动图
const $$slider_img_database = $$img_func_database(
  'slider_img',
  [
    {
      img: 'http://src.e7wei.com/0.385996187680848.png',
      crop_img: 'http://src.e7wei.com/0.385996187680848.png',
      title: { value: '这里是图片标题' },
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
      img: 'http://src.e7wei.com/0.3713184937697187.png',
      crop_img: 'http://src.e7wei.com/0.3713184937697187.png',
      title: { value: '这里是图片标题' },
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
      img: 'http://src.e7wei.com/0.2893359930657198.png',
      crop_img: 'http://src.e7wei.com/0.2893359930657198.png',
      title: { value: '这里是图片标题' },
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
  221,
  311,
  'grey',
  '#000'
);
// 5. 轮播图
const $$carousel_img_database = $$img_func_database(
  'carousel_img',
  [
    {
      img: 'http://src.e7wei.com/0.3078424418116057.png',
      crop_img: 'http://src.e7wei.com/0.3078424418116057.png',
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
      img: 'http://src.e7wei.com/0.9703241613472722.png',
      crop_img: 'http://src.e7wei.com/0.9703241613472722.png',
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
      img: 'http://src.e7wei.com/0.5336862457968479.png',
      crop_img: 'http://src.e7wei.com/0.5336862457968479.png',
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
      img: 'http://src.e7wei.com/0.7599642934946711.png',
      crop_img: 'http://src.e7wei.com/0.7599642934946711.png',
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

export const $$img_re_2 = $$img_func_database(
  'img_re_2',
  [
    {
      img: 'http://7xv429.com1.z0.glb.clouddn.com/nvren1.jpg',
      crop_img: 'http://7xv429.com1.z0.glb.clouddn.com/nvren1.jpg',
      title: { value: '' },
      content: {
        value:
          '迷途的爱终究以悲剧收场，致使很多人爱过一次便不敢再爱，相信一个人以后便不再相信。',
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

export const $$img_re_3 = $$img_func_database(
  'img_re_3',
  [
    {
      img: 'http://7xn5zt.com1.z0.glb.clouddn.com/15.jpg',
      crop_img: 'http://7xn5zt.com1.z0.glb.clouddn.com/15.jpg',
      title: { value: '' },
      content: {
        value: '',
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
  200,
  280,
  '',
  '#000'
);
export const $$img_re_4 = $$img_func_database(
  'img_re_4',
  [
    {
      img: 'http://7xn5zt.com1.z0.glb.clouddn.com/64.jpg',
      crop_img: 'http://7xn5zt.com1.z0.glb.clouddn.com/64.jpg',
      title: { value: '' },
      content: {
        value: '',
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
  240,
  250,
  '',
  '#000'
);
export const $$img_re_5 = $$img_func_database(
  'img_re_5',
  [
    {
      img: 'http://7xn5zt.com1.z0.glb.clouddn.com/15.jpg',
      crop_img: 'http://7xn5zt.com1.z0.glb.clouddn.com/15.jpg',
      title: { value: '图片名称' },
      content: {
        value: '',
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
  200,
  280,
  '',
  '#000'
);
export const $$img_re_6 = $$img_func_database(
  'img_re_6',
  [
    {
      img: 'http://f.e7wei.com/20161108_58218a762ebd0.png',
      crop_img: 'http://f.e7wei.com/20161108_58218a762ebd0.png',
      title: { value: '烘焙' },
      content: {
        value:
          '，是指在物料燃点之下通过干热的方式使物料脱水变干变硬的过程。烘焙是面包、蛋糕类产品制作不可缺少的步骤，通过烘焙后淀粉产生糊化、蛋白质变性等一系列化学变化后，面包、蛋糕达到熟化的目的。',
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
  294,
  '',
  '#000'
);

export const $$img_re_7 = $$img_func_database(
  'img_re_7',
  [
    {
      img: 'http://f.e7wei.com/20161108_58218a8421c19.png',
      crop_img: 'http://f.e7wei.com/20161108_58218a8421c19.png',
      title: { value: '烘焙' },
      content: {
        value:
          '《造房子》是王澍获得“建筑界的诺贝尔奖”普利兹克奖后的第一本著作。这里有他的个人成长轨迹、代表作的诞生过程，以及他对传统文化、东方美学的经年探索。他用建筑对世界发问。',
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
  294,
  '',
  '#000'
);
// 导出
export {
  $$single_img_database,
  $$grid_img_database,
  $$list_img_database,
  $$slider_img_database,
  $$carousel_img_database,
  $$img_addItem_database,
};

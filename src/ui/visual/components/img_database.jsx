import { fromJS } from 'immutable';
// img 根级数据集函数
const $$img_func_database = (name, item, layout) => {
  return fromJS({
    // 基础编辑属性
    customize: {
      name: name,
      item: item,
      base: {
        show_element: { value: undefined }, // 元素显示
        layout: { value: layout }, // 布局
      },
    },
    // 高级编辑属性
    advance: {
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 },
      },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
      },
    },
  });
};

// 添加 img 组件 item 时的数据
const $$img_addItem_database = fromJS({
  img:
    'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg',
  title: { value: '这里是图片标题' },
  content: {
    value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
  },
  link: { value: '' },
  width: { value: '' },
  height: { value: '' },
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
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg7.jpg',
      title: { value: '图片备注' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  0
);
// 2. 横排排列图
const $$grid_img_database = $$img_func_database(
  'grid_img',
  [
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg7.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  2
);
// 3. 竖排排列图
const $$list_img_database = $$img_func_database(
  'list_img',
  [
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  1
);
// 4. 滑动图
const $$slider_img_database = $$img_func_database(
  'slider_img',
  [
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  0
);
// 5. 轮播图
const $$carousel_img_database = $$img_func_database(
  'carousel_img',
  [
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg',
      title: { value: '这里是图片标题' },
      content: {
        value: '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
      },
      link: { value: '' },
      width: { value: '' },
      height: { value: '' },
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
    },
  ],
  0
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

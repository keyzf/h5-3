import { fromJS } from 'immutable';
// 创建核心组件函数
const $$mall_func_database = (name, item, layout) => {
  return fromJS({
    // 基础设置
    customize: {
      name: name,
      base: {
        // 可隐藏元素包括：标题，描述，图片，按钮，现价，原价
        show_element: { value: undefined },
        // 一行显示个数
        layout: { value: layout },
      },
      item: item,
    },
    // 高级设置
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
// 添加组件时的数据集
const $$mall_item_database = fromJS({
  img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
  img_config: {
    stretching: { value: '' },
    tiling: { value: '' },
  }, //图片配置
  img_url: { value: '' }, // 图片地址
  //基础内容
  width: { value: '' }, // 图片宽度
  height: { value: '' }, //图片高度
  title: { value: '这里是商品图片' }, //标题
  content: { value: '这里是商品描述，这里是商品描述' }, //内容
  //商品价格
  current: { value: '330' }, //现价
  original: { value: '600' }, //原价
  //按钮
  btn_content: { value: '按钮' }, //按钮内容
  btn_url: { value: '' }, // 按钮链接
});
// 项目数据
const $$grid_mall_database = $$mall_func_database(
  'grid_mall',
  [
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  2
);
const $$list_mall_database = $$mall_func_database(
  'list_mall',
  [
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  1
);

// 导出模块
export { $$mall_item_database, $$grid_mall_database, $$list_mall_database };

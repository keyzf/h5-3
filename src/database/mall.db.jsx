import { fromJS } from 'immutable';
// 创建核心组件函数
const $$mall_func_database = (
  name,
  item,
  layout,
  height,
  width,
  content_color
) => {
  return fromJS({
    // 基础设置
    customize: {
      type: 'mall',
      name: name,
      base: {
        // 可隐藏元素包括：标题，描述，图片，按钮，现价，原价
        show_element: { value: undefined },
        // 一行显示个数
        layout: { value: layout },
        font_color: '#000', //字体颜色
      },
      item: item,
    },
    // 高级设置
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
      live: false,
      zIndex: 100,
      content_color: content_color,
    },
  });
};
// 添加组件时的数据集
const $$mall_item_database = fromJS({
  img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
  crop_img:
    'https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg', //图片
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
      img: 'http://src.e7wei.com/0.0029435212707935587.png', //图片
      crop_img: 'http://src.e7wei.com/0.0029435212707935587.png', //图片
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
      radius: { value: 0 },
      btn_content: { value: '按钮' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: ' http://src.e7wei.com/0.412080779609844.png ', //图片
      crop_img: ' http://src.e7wei.com/0.412080779609844.png ', //图片
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
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'http://src.e7wei.com/0.5455798769523392.png', //图片
      crop_img: 'http://src.e7wei.com/0.5455798769523392.png', //图片
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
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: ' http://src.e7wei.com/0.2904350469691286.png', //图片
      crop_img: ' http://src.e7wei.com/0.2904350469691286.png', //图片
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
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  2,
  550,
  300
);
const $$list_mall_database = $$mall_func_database(
  'list_mall',
  [
    {
      img: ' http://src.e7wei.com/0.412080779609844.png ', //图片
      crop_img: ' http://src.e7wei.com/0.412080779609844.png ', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      radius: { value: 0 },
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //按钮
      btn_content: { value: '立即抢购' }, //立即抢购内容
      btn_url: { value: '' }, // 立即抢购链接
    },
    {
      img: 'http://src.e7wei.com/0.5455798769523392.png', //图片
      crop_img: 'http://src.e7wei.com/0.5455798769523392.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      radius: { value: 0 },
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //立即抢购
      btn_content: { value: '立即抢购' }, //立即抢购内容
      btn_url: { value: '' }, // 立即抢购链接
    },
    {
      img: 'http://src.e7wei.com/0.979647849432727.png', //图片
      crop_img: 'http://src.e7wei.com/0.979647849432727.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      radius: { value: 0 },
      height: { value: '' }, //图片高度
      title: { value: '这里是商品图片' }, //标题
      content: { value: '这里是商品描述，这里是商品描述' }, //内容
      //商品价格
      current: { value: '330' }, //现价
      original: { value: '600' }, //原价
      //立即抢购
      btn_content: { value: '立即抢购' }, //立即抢购内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  1,
  309,
  280
);

//recommend
const $$one_mall_database = $$mall_func_database(
  'one_mall',
  [
    {
      img:
        'http://pimg.xiuzan.com/xiuzan/2017/01/20170118110355_8fNJ4b?x-oss-process=image/resize,w_116/format,png', //图片
      crop_img:
        'http://pimg.xiuzan.com/xiuzan/2017/01/20170118110355_8fNJ4b?x-oss-process=image/resize,w_116/format,png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '现代简约欧式家居装饰品摆件' }, //标题
      content: { value: '逼真手感高档花卉盆栽' }, //内容
      //商品价格
      current: { value: '60' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '立即抢购' }, //按钮内容
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img:
        'http://pimg.xiuzan.com/xiuzan/2017/01/20170118110830_m873dh?x-oss-process=image/resize,w_116/format,png', //图片
      crop_img:
        'http://pimg.xiuzan.com/xiuzan/2017/01/20170118110830_m873dh?x-oss-process=image/resize,w_116/format,png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      radius: { value: 0 },
      title: { value: '创意清新储物罐装饰花瓶' }, //标题
      content: { value: '软装时尚百搭' }, //内容
      //商品价格
      current: { value: '32' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '立即抢购' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img:
        'http://pimg.xiuzan.com/xiuzan/2017/01/20170118113237_EdDfdc?x-oss-process=image/resize,w_116/format,png', //图片
      crop_img:
        'http://pimg.xiuzan.com/xiuzan/2017/01/20170118113237_EdDfdc?x-oss-process=image/resize,w_116/format,png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      radius: { value: 0 },
      height: { value: '' }, //图片高度
      title: { value: '小清新高仿真雏菊花' }, //标题
      content: { value: '给生活来点小确幸吧！' }, //内容
      //商品价格
      current: { value: '18' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '立即抢购' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  2,
  319,
  289
);
const $$two_mall_database = $$mall_func_database(
  'two_mall',
  [
    {
      img: 'http://src.e7wei.com/0.943903263413274.png', //图片
      crop_img: 'http://src.e7wei.com/0.943903263413274.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      radius: { value: 0 },
      title: { value: '请编辑宝贝标题' }, //标题
      content: { value: '' }, //内容
      //商品价格
      current: { value: '￥999.00' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'http://src.e7wei.com/0.2430957175713202.png', //图片
      crop_img: 'http://src.e7wei.com/0.2430957175713202.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '请编辑宝贝标题' }, //标题
      content: { value: '' }, //内容
      //商品价格
      current: { value: '￥999.00' }, //现价
      radius: { value: 0 },
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  2,
  249,
  300
);
const $$three_mall_database = $$mall_func_database(
  'three_mall',
  [
    {
      img: 'http://src.e7wei.com/0.6431361131703945.png', //图片
      crop_img: 'http://src.e7wei.com/0.6431361131703945.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: 'FASHION SHOW' }, //标题
      content: { value: '小清醒刺绣蝴蝶结系领竖女孩' }, //内容
      //商品价格
      current: { value: '￥220.00' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'http://src.e7wei.com/0.3005644854593039.png', //图片
      crop_img: 'http://src.e7wei.com/0.3005644854593039.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      radius: { value: 0 },
      height: { value: '' }, //图片高度
      title: { value: 'FASHION SHOW' }, //标题
      content: { value: '小清醒刺绣蝴蝶结系领竖女孩' }, //内容
      //商品价格
      current: { value: '￥220.00' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'http://src.e7wei.com/0.9430204499264667.png', //图片
      crop_img: 'http://src.e7wei.com/0.9430204499264667.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      radius: { value: 0 },
      title: { value: 'FASHION SHOW' }, //标题
      content: { value: '小清醒刺绣蝴蝶结系领竖女孩' }, //内容
      //商品价格
      current: { value: '￥220.00' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  1,
  480
);
const $$four_mall_database = $$mall_func_database(
  'four_mall',
  [
    {
      img: 'http://src.e7wei.com/0.943903263413274.png', //图片
      crop_img: 'http://src.e7wei.com/0.943903263413274.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '请编辑宝贝标题' }, //标题
      content: { value: '' }, //内容
      //商品价格
      current: { value: '￥999.00' }, //现价
      radius: { value: 0 },
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'http://src.e7wei.com/0.943903263413274.png', //图片
      crop_img: 'http://src.e7wei.com/0.943903263413274.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '请编辑宝贝标题' }, //标题
      content: { value: '' }, //内容
      //商品价格
      current: { value: '￥999.00' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  2,
  300,
  300
);
const $$five_mall_database = $$mall_func_database(
  'five_mall',
  [
    {
      img: 'http://src.e7wei.com/0.42801774343509513.png', //图片
      crop_img: 'http://src.e7wei.com/0.42801774343509513.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '美白补水保湿炎斑' }, //标题
      content: { value: '' }, //内容
      //商品价格
      current: { value: '129' }, //现价
      radius: { value: 0 },
      original: { value: '399' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  1,
  180,
  300
);
const $$six_mall_database = $$mall_func_database(
  'six_mall',
  [
    {
      img: 'http://src.e7wei.com/0.8905093712207472.png', //图片
      crop_img: 'http://src.e7wei.com/0.8905093712207472.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '靓白肌肤密护  明星套装' }, //标题
      content: { value: '美白补水保湿淡斑' }, //内容
      //商品价格
      current: { value: '129' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
    {
      img: 'http://src.e7wei.com/0.8905093712207472.png', //图片
      crop_img: 'http://src.e7wei.com/0.8905093712207472.png', //图片
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      }, //图片配置
      img_url: { value: '' }, // 图片地址
      //基础内容
      width: { value: '' }, // 图片宽度
      height: { value: '' }, //图片高度
      title: { value: '靓白肌肤密护  明星套装' }, //标题
      content: { value: '美白补水保湿淡斑' }, //内容
      //商品价格
      current: { value: '129' }, //现价
      original: { value: '' }, //原价
      //按钮
      btn_content: { value: '' }, //按钮内容
      radius: { value: 0 },
      btn_url: { value: '' }, // 按钮链接
    },
  ],
  2,
  315,
  300
);

// 导出模块
export {
  $$mall_item_database,
  $$grid_mall_database,
  $$list_mall_database,
  $$one_mall_database,
  $$two_mall_database,
  $$three_mall_database,
  $$four_mall_database,
  $$five_mall_database,
  $$six_mall_database,
};

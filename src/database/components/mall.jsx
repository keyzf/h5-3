export const $$mall_database = name => {
  return {
    customize: {
      name: name,
      base: {
        // 可隐藏元素包括：标题，描述，图片，按钮，现价，原价
        show_element: { value: undefined },
        // 一行显示个数
        layout: { value: 0 },
      },
      item: [
        {
          img: '', //图片
          img_config: {
            stretching: { value: '' },
            tiling: { value: '' },
          }, //图片配置
          img_url: { value: '' }, // 图片地址
          //基础内容
          width: { value: '' }, // 图片宽度
          height: { value: '' }, //图片高度
          title: { value: '标题' }, //标题
          content: { value: '内容' }, //内容
          //商品价格
          current: { value: '' }, //现价
          original: { value: '' }, //原价
          //按钮
          btn_content: { value: '' }, //按钮内容
          btn_url: { value: '' }, // 按钮链接
        },
        {
          img: '', //图片
          img_config: {
            stretching: { value: '' },
            tiling: { value: '' },
          }, //图片配置
          img_url: { value: '' }, // 图片地址
          //基础内容
          width: { value: '' }, // 图片宽度
          height: { value: '' }, //图片高度
          title: { value: '标题' }, //标题
          content: { value: '内容' }, //内容
          //商品价格
          current: { value: '' }, //现价
          original: { value: '' }, //原价
          //按钮
          btn_content: { value: '' }, //按钮内容
          btn_url: { value: '' }, // 按钮链接
        },
        {
          img: '', //图片
          img_config: {
            stretching: { value: '' },
            tiling: { value: '' },
          }, //图片配置
          img_url: { value: '' }, // 图片地址
          //基础内容
          width: { value: '' }, // 图片宽度
          height: { value: '' }, //图片高度
          title: { value: '标题' }, //标题
          content: { value: '内容' }, //内容
          //商品价格
          current: { value: '' }, //现价
          original: { value: '' }, //原价
          //按钮
          btn_content: { value: '' }, //按钮内容
          btn_url: { value: '' }, // 按钮链接
        },
        {
          img: '', //图片
          img_config: {
            stretching: { value: '' },
            tiling: { value: '' },
          }, //图片配置
          img_url: { value: '' }, // 图片地址
          //基础内容
          width: { value: '' }, // 图片宽度
          height: { value: '' }, //图片高度
          title: { value: '标题' }, //标题
          content: { value: '内容' }, //内容
          //商品价格
          current: { value: '' }, //现价
          original: { value: '' }, //原价
          //按钮
          btn_content: { value: '' }, //按钮内容
          btn_url: { value: '' }, // 按钮链接
        },
      ],
    },
    advance: {
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 },
      },
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
      },
    },
  };
};

export const $$mall_item_database = {
  img: '', //图片
  img_config: {
    stretching: { value: '' },
    tiling: { value: '' },
  }, //图片配置
  img_url: { value: '' }, // 图片地址
  //基础内容
  width: { value: '' }, // 图片宽度
  height: { value: '' }, //图片高度
  title: { value: '标题' }, //标题
  content: { value: '内容' }, //内容
  //商品价格
  current: { value: '' }, //现价
  original: { value: '' }, //原价
  //按钮
  btn_content: { value: '' }, //按钮内容
  btn_url: { value: '' }, // 按钮链接
};

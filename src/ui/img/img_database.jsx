import { fromJS } from "immutable";
// img 根级数据集函数
const $$img_func_database = (name, item, layout, height) => {
  return fromJS({
    // 基础编辑属性
    customize: {
      name: name,
      item: item,
      base: {
        show_element: { value: undefined }, // 元素显示
        layout: { value: layout }, // 布局
        font_color: "#000" //字体颜色
      }
    },
    // 高级编辑属性
    advance: {
      color: "",
      img: "",
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      },
      perimeter: { width: { value: 320 }, height: { value: height } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } }
    }
  });
};

// 添加 img 组件 item 时的数据
const $$img_addItem_database = fromJS({
  img:
    "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg",
  title: { value: "这里是图片标题" },
  content: {
    value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
  },
  link: { value: "" },
  width: { value: "" },
  height: { value: "" },
  img_config: {
    stretching: { value: "" },
    tiling: { value: "" }
  }
});

// 1. 单张图片
const $$single_img_database = $$img_func_database(
  "single_img",
  [
    {
      img: "http://src.e7wei.com/0.41802468997793696.png",
      crop_img: "http://src.e7wei.com/0.41802468997793696.png",
      title: { value: "图片备注" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  0,
  213
);
// 2. 横排排列图
const $$grid_img_database = $$img_func_database(
  "grid_img",
  [
    {
      img: " http://src.e7wei.com/0.3528611499486174.png",
      crop_img: " http://src.e7wei.com/0.3528611499486174.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.27458586147898956.png",
      crop_img: "http://src.e7wei.com/0.27458586147898956.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.9035000016293588.png",
      crop_img: "http://src.e7wei.com/0.9035000016293588.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.4045054410741806.png",
      crop_img: "http://src.e7wei.com/0.4045054410741806.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  2,
  450
);
// 3. 竖排排列图
const $$list_img_database = $$img_func_database(
  "list_img",
  [
    {
      img: "http://src.e7wei.com/0.35113021335874683.png",
      crop_img: "http://src.e7wei.com/0.35113021335874683.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.2450519793780439.png",
      crop_img: "http://src.e7wei.com/0.2450519793780439.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.8020362485232375.png",
      crop_img: "http://src.e7wei.com/0.8020362485232375.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  1,
  500
);
// 4. 滑动图
const $$slider_img_database = $$img_func_database(
  "slider_img",
  [
    {
      img: "http://src.e7wei.com/0.385996187680848.png",
      crop_img: "http://src.e7wei.com/0.385996187680848.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.3713184937697187.png",
      crop_img: "http://src.e7wei.com/0.3713184937697187.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.2893359930657198.png",
      crop_img: "http://src.e7wei.com/0.2893359930657198.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.6791210836134676.png",
      crop_img: "http://src.e7wei.com/0.6791210836134676.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.26510017936261243.png",
      crop_img: "http://src.e7wei.com/0.26510017936261243.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  0,
  200
);
// 5. 轮播图
const $$carousel_img_database = $$img_func_database(
  "carousel_img",
  [
    {
      img: "http://src.e7wei.com/0.3078424418116057.png",
      crop_img: "http://src.e7wei.com/0.3078424418116057.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.9703241613472722.png",
      crop_img: "http://src.e7wei.com/0.9703241613472722.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.5336862457968479.png",
      crop_img: "http://src.e7wei.com/0.5336862457968479.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img: "http://src.e7wei.com/0.7599642934946711.png",
      crop_img: "http://src.e7wei.com/0.7599642934946711.png",
      title: { value: "这里是图片标题" },
      content: {
        value: "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  0,
  165
);

// 推荐组件 1
const $$one_img_database = $$img_func_database(
  "one_img",
  [
    {
      img:
        "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160441_mfnkDr?x-oss-process=image/resize,w_116/format,jpg",
      crop_img: "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160441_mfnkDr?x-oss-process=image/resize,w_116/format,jpg",
      title: { value: "居家办公" },
      content: {
        value: "两个简单的小TIP让新年的家变得更加整洁有趣"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img:
        "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160450_hkfRNh?x-oss-process=image/resize,w_116/format,jpg",
      crop_img: "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160450_hkfRNh?x-oss-process=image/resize,w_116/format,jpg",
      title: { value: "数码潮品" },
      content: {
        value: "苹果正在开发特别的东西"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img:
        "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160457_tGE6Ny?x-oss-process=image/resize,w_116/format,jpg",
      crop_img: "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160457_tGE6Ny?x-oss-process=image/resize,w_116/format,jpg",
      title: { value: "美食茶艺" },
      content: {
        value: "这一刻，我的诗和远方，就是手边的茶壶"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    },
    {
      img:
        "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160514_76XecX?x-oss-process=image/resize,w_116/format,jpg",
      crop_img: "http://pimg.xiuzan.com/xiuzan/2017/01/20170117160514_76XecX?x-oss-process=image/resize,w_116/format,jpg",
      title: { value: "音乐达人" },
      content: {
        value: "只要世上还有不灭的光 远方也不算太远"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  1,
  400
);

// 推荐组件 2
const $$two_img_database = $$img_func_database(
  "two_img",
  [
    {
      img:
        "http://src.e7wei.com/0.017786148335042107.png",
      crop_img: "http://src.e7wei.com/0.017786148335042107.png",
      title: { value: "居家生活" },
      content: {
        value: "身为颜值控、装备党的她，在能力范围内只选最好,想把喜欢的北欧经典设计都搬回家！"
      },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }
  ],
  1,
  400
);

// 导出
export {
  $$single_img_database,
  $$grid_img_database,
  $$list_img_database,
  $$slider_img_database,
  $$carousel_img_database,
  $$img_addItem_database,
  $$one_img_database,
  $$two_img_database
};

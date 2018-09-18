import * as React from "react";

const { Provider, Consumer } = React.createContext({
  version: "", // 使用数据的版本号
  pv: "", // pv数

  ui: [], // ui组件数据源
  bg: { img: "", color: "" }, //背景组件
  music: "", //音乐组件

  editor: { data: "", number: "" }, //当前编辑的组件数据

  cover: "", //分享图片
  desc: "", // 分享描述
  title: "", // 分享标题

  url: "", //发布链接

  post: () => {}, // ajax函数更新数据
  add: () => {}, // 向ui中添加数据
  delete: () => {} // 删除ui中的数据
});

export { Provider, Consumer };

import * as React from "react";
import $$bg_db from "../resources/bg/bg.db";

const { Provider, Consumer } = React.createContext({
  version: "", // 使用数据的版本号
  pv: "", // pv数

  ui: [], // ui组件数据源
  bg: { ...$$bg_db }, //背景组件
  music: "", //音乐组件

  editor: { data: {}, index: 0 }, //当前编辑的组件数据

  cover: "", //分享图片
  desc: "", // 分享描述
  title: "", // 分享标题

  url: "", //发布链接
  add: () => {
  }, // 向ui中添加数据
  draggable: () => {
  },// 移动组件
  clickUi: () => {},//选择操作组件
  optionUi:()=>{} //对ui进行的操作箱，比如删除，


});

export { Provider, Consumer };

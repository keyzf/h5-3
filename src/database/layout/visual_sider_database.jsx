import React from "react";
import { List } from "immutable";
import TextSelect from "../../app/model/select/text";
import ImgSelect from "../../app/model/select/img";
import MusicSelect from "../../app/model/select/music";
import ViedoSelect from "../../app/model/select/video";
import MallSelect from "../../app/model/select/mall";
import InterActiveSelect from "../../app/model/select/interactive";

export const $$visual_sider_database = List([
  // 文字
  {
    icon: "iconfont icon-wenzixiaoguo",
    title: "文字",
    select: <TextSelect/>
  },
  // 图片
  {
    icon: "iconfont icon-tupian",
    title: "图片",
    select: <ImgSelect/>
  },
  // 音乐
  {
    icon: "iconfont icon-yinlemusic214",
    title: "音乐",
    select: <MusicSelect/>
  },
  // 视频
  {
    icon: "iconfont icon-shipin",
    title: "视频",
    select: <ViedoSelect/>
  },
  // 商品
  {
    icon: "iconfont icon-unie62d",
    title: "商品",
    select: <MallSelect/>
  },
  // 互动
  {
    icon: "icon iconfont icon-zhinengyuyinjiaohu",
    title: "互动",
    select: <InterActiveSelect/>
  }
  // // 表单
  // {
  //   icon: "iconfont icon-biaodan",
  //   title: "表单",
  //   // select: <FormSelect/>
  // },
  // 按钮
  // {
  //   icon: "iconfont icon-anniu",
  //   title: "按钮",
  //   // select: <ButtonSelect/>
  // }
]);

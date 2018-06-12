import React from "react";
import { List } from "immutable";
import SelectCommon from "../select_common";
import ImgSelect from "../../containers/visual/select/img";
import MusicSelect from "../../containers/visual/select/music";
import VideoSelect from "../../containers/visual/select/video";
import MallSelect from "../../containers/visual/select/mall";
import InterActiveSelect from "../../containers/visual/select/interactive";
// 数据
import { template_text_data } from "./select_database_common";

export const $$visual_sider_database = List([
  // 文字
  {
    icon: "iconfont icon-wenzixiaoguo",
    title: "文字",
    select: <SelectCommon data={template_text_data}/>
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
    select: <VideoSelect/>
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
]);

/**
 * 直接被调用，不经过redux,
 * 不使用fromJS的原因：如果使用fromJS时，在循环时，select循环不出来
 * @type {{width: number, height: number, url: string}}
 */
import React from 'react';
import { List } from 'immutable';
import TextSelect from '../../app/http/visual/select/text';
import ImgSelect from '../../app/http/visual/select/img';
import MusicSelect from '../../app/http/visual/select/music';
import VideoSelect from '../../app/http/visual/select/video';
import MallSelect from '../../app/http/visual/select/mall';
import InterActiveSelect from '../../app/http/visual/select/interactive';

export const $$visual_sider_database = List([
  // 文字
  {
    icon: 'iconfont icon-wenzixiaoguo',
    title: '文字',
    select: <TextSelect />,
  },
  // 图片
  {
    icon: 'iconfont icon-tupian',
    title: '图片',
    select: <ImgSelect />,
  },
  // 音乐
  {
    icon: 'iconfont icon-yinlemusic214',
    title: '音乐',
    select: <MusicSelect />,
  },
  // 视频
  {
    icon: 'iconfont icon-shipin',
    title: '视频',
    select: <VideoSelect />,
  },
  // 商品
  {
    icon: 'iconfont icon-unie62d',
    title: '商品',
    select: <MallSelect />,
  },
  // 互动
  {
    icon: 'icon iconfont icon-zhinengyuyinjiaohu',
    title: '互动',
    select: <InterActiveSelect />,
  },
]);

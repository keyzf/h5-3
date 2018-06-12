import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import { List } from 'immutable';
import style from './side.module.scss';
import SelectCommon from '../../common/select_common';
import InterActiveSelect from '../../containers/visual/select/interactive';
import {
  template_img_data,
  template_mall_data,
  template_music_data,
  template_text_data,
  template_video_data,
} from '../../common/database/select_database_common';

/**
 * 将侧边栏数据遍历出来
 * 数据：
 * 1. 项目头 icon ，名称
 * 2. 项目 内容
 */
class SiderVisualView extends PureComponent {
  render() {
    // 侧边栏显示数据 ->select 中data 数据指向的是common 文件中database/select_database_common文件
    const $$visual_sider_database = List([
      // 文字
      {
        icon: 'iconfont icon-wenzixiaoguo',
        title: '文字',
        select: <SelectCommon data={template_text_data} />,
      },
      // 图片
      {
        icon: 'iconfont icon-tupian',
        title: '图片',
        select: <SelectCommon data={template_img_data} />,
      },
      // 音乐
      {
        icon: 'iconfont icon-yinlemusic214',
        title: '音乐',
        select: <SelectCommon data={template_music_data} />,
      },
      // 视频
      {
        icon: 'iconfont icon-shipin',
        title: '视频',
        select: <SelectCommon data={template_video_data} />,
      },
      // 商品
      {
        icon: 'iconfont icon-unie62d',
        title: '商品',
        select: <SelectCommon data={template_mall_data} />,
      },
      // 互动
      {
        icon: 'icon iconfont icon-zhinengyuyinjiaohu',
        title: '互动',
        select: <InterActiveSelect />,
      },
    ]);
    // tab 样式
    const Tab = {
      defaultActiveKey: '文字',
      tabPosition: 'left',
    };
    // 遍历出项目头
    const tabPan = (icon, title) => {
      return {
        key: title,
        tab: (
          <span>
            <i className={icon} style={{ fontSize: 24, marginRight: 3 }} />
            <br />
            {title}
          </span>
        ),
        className: style.item,
      };
    };

    return (
      <Tabs className={style.layout} {...Tab} >
        {/*通过循环将组件信息渲染出来*/}
        {$$visual_sider_database.map(data => {
          return (
            //遍历出项目头 icon ，名称
            <Tabs.TabPane {...tabPan(data.icon, data.title)} >
              {/*遍历出项目 内容*/}
              {data.select}

            </Tabs.TabPane>
          );
        })}
      </Tabs>
    );
  }
}

export default SiderVisualView;

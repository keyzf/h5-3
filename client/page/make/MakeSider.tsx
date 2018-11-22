import * as React from "react";
import { Tabs } from "antd";
import TextList from "../../resource/text/TextList";
import BgEdit from "../../components/edit/bg/bg-edit";
import PictureList from "../../resource/picture/PictureList";
import MusicEdit from "../../components/edit/musicEdit";
import InterActive from "../../components/sider/inter-active";

/**
 *  @desc  渲染各组件列表
 */
const MakeSider = React.memo(props => {
  return (
    <Tabs {...tabsConfig}>
      {tabList.map((data: { icon; title; content }, index: number) => {
        return (
          <Tabs.TabPane
            key={`${index}`}
            style={{ marginLeft: " -24px" }}
            tab={
              <span>
                <i
                  className={`${data.icon}`}
                  style={{ fontSize: 24, marginRight: 3 }}
                />
                <br/>
                {data.title}
              </span>
            }
          >
            {data.content}
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
});

/**
 * @desc tabs 配置
 */
const tabsConfig: { defaultActiveKey; style; tabPosition } = {
  defaultActiveKey: "0",
  style: { height: "100%" },
  tabPosition: "left"
};

/**
 * @desc 组件列表
 */
const tabList = [
  {
    icon: `iconfont icon-wenzixiaoguo`,
    title: "文字",
    content: <TextList/>
  },
  { icon: `iconfont icon-tupian`, title: "图片", content: <PictureList/> },
  { icon: `iconfont icon-beijing`, title: "背景", content: <BgEdit/> },
  { icon: `iconfont icon-yinlemusic214`, title: "音乐", content: <MusicEdit/> },
  { icon: `iconfont icon-yingyong`, title: "更多", content: <InterActive/> }
];

export default MakeSider;

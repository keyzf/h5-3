import * as React from "react";
import { Spin, Tabs } from "antd";
import { css } from "emotion";

/**
 * 样式
 */
const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

/**
 * 路由拆分
 */
const TextSider = React.lazy(() => import("../../resource/text/TextList"));
const BgEdit = React.lazy(() => import("../../components/edit/bg/bg-edit"));
const PictureSider = React.lazy(() =>
  import("../../resource/picture/PictureList")
);
const MusicEdit = React.lazy(() => import("../../components/edit/musicEdit"));
const InterActive = React.lazy(() =>
  import("../../components/sider/inter-active")
);

/**
 * loading 样式
 */
const loading = (
  <div className={style}>
    <Spin delay={300} size="large" tip="拼命加载中..." />
  </div>
);

/**
 *  @desc  渲染各组件列表
 */
const MakeSider = React.memo(() => {
  return (
    <Tabs {...tabsConfig}>
      {tabList.map(
        (data: { icon: any; title: any; content: any }, index: number) => {
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
                  <br />
                  {data.title}
                </span>
              }
            >
              <React.Suspense fallback={loading}>{data.content}</React.Suspense>
            </Tabs.TabPane>
          );
        }
      )}
    </Tabs>
  );
});

/**
 * @desc tabs 配置
 */
const tabsConfig: { defaultActiveKey: any; style: any; tabPosition: any } = {
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
    content: <TextSider />
  },
  { icon: `iconfont icon-tupian`, title: "图片", content: <PictureSider /> },
  { icon: `iconfont icon-beijing`, title: "背景", content: <BgEdit /> },
  {
    icon: `iconfont icon-yinlemusic214`,
    title: "音乐",
    content: <MusicEdit />
  },
  { icon: `iconfont icon-yingyong`, title: "更多", content: <InterActive /> }
];

export default MakeSider;

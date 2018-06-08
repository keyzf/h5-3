import React, { PureComponent } from "react";
import { Tabs } from "antd";
import { $$visual_sider_database } from "../../database/layout/visual_sider_database";
import "./_visual_page.css";

/**
 * 将侧边栏数据遍历出来
 * 数据：
 * 1. 项目头 icon ，名称
 * 2. 项目 内容
 */
class SiderVisualView extends PureComponent {
  render() {
    // tab 样式
    const Tab = {
      defaultActiveKey: "文字",
      tabPosition: "left"
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
        className: "visual_sider-tab-item"
      };
    };

    return (
      <Tabs className={"visual_sider_tab"} {...Tab}>
        {/*通过循环将组件信息渲染出来*/}
        {$$visual_sider_database.map(data => {
          return (
            //遍历出项目头 icon ，名称
            <Tabs.TabPane {...tabPan(data.icon, data.title)}>
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

import React from 'react';
import { Tabs } from 'antd';
import { $$visual_sider_database } from '../../../database/layout/visual_sider_database';

class SiderVisualView extends React.Component {
  render() {
    const tabPan = (icon, title) => {
      return {
        tab: Item(icon, title),
        key: title,
        style: {
          marginLeft: ' -24px',
        },
      };
    };
    const Tab = {
      defaultActiveKey: '文字',
      tabPosition: 'left',
      style: {
        height: '100%',
        overflow: 'auto',
        padding: '0',
        margin: '0',
      },
    };
    const Item = (icon, title) => {
      return (
        <span>
          <i className={icon} style={{ fontSize: 24, marginRight: 3 }} />
          <br />
          {title}
        </span>
      );
    };
    return (
      <Tabs {...Tab}>
        {/*通过循环将组件信息渲染出来*/}
        {$$visual_sider_database.map(data => {
          return (
            <Tabs.TabPane {...tabPan(data.icon, data.title)}>
              {/*提供选择的主体*/}
              {data.select}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    );
  }
}

export default SiderVisualView;

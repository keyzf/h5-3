import * as React from 'react';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';


class Log extends React.Component<any, any> {
  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          当前
        </Menu.Item>
        <Menu.Item>
          10分钟前
        </Menu.Item>
        <Menu.Item>
          20分钟前
        </Menu.Item>
        <Menu.Item style={{ borderBottom: '1px solid rgb(232,232,232)' }}>
          30分钟前
        </Menu.Item>
        <Menu.Item>
          2018年09月30日
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <span style={{ color: 'white' }}>

          <i className={'icon iconfont  icon-shouye'} style={{ marginRight: '10px' }}/>
          历史记录
        </span>
      </Dropdown>
    );
  }
}

export default Log;

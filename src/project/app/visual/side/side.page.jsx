import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { Menu, Icon, Layout } from 'antd';
import connect from '../../../redux/decorator';

@connect
export default class SiderVisualView extends PureComponent {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    /**
     * 如果状态为真，则将show_ui收缩
     */
    if (collapsed) {
      this.props.upData('CHOOSE_UI', { name: '', menuChoose: null });
    }
    this.setState({ collapsed });
  };

  onShow = (name, index) => {
    this.props.upData('CHOOSE_UI', { name: name, menuChoose: index });
  };

  render() {
    const $$menuChoose = this.props.choose_ui_value.data.get('menuChoose');
    const { Sider } = Layout;
    const $$visual_sider_database = List([
      {
        icon: 'iconfont icon-wenzixiaoguo',
        title: '文字',
        name: 'text',
      },
      {
        icon: 'iconfont icon-tupian',
        title: '图片',
        name: 'img',
      },
      {
        icon: 'iconfont icon-yinlemusic214',
        title: '音乐',
        name: 'music',
      },
      {
        icon: 'iconfont icon-unie62d',
        title: '商品',
        name: 'mall',
      },
      {
        icon: 'icon iconfont icon-zhinengyuyinjiaohu',
        title: '互动',
        name: 'lnteractive',
      },
    ]);

    return (
      <Sider
        style={{ background: 'white' }}
        width={120}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu
          mode="inline"
          selectedKeys={[`${$$menuChoose}`]}
          className={'side'}
          style={{ border: 'none' }}
        >
          {$$visual_sider_database.map((data, index) => {
            return (
              <Menu.Item
                key={index}
                style={{ marginTop: 0 }}
                onClick={this.onShow.bind(this, data.name, index)}
              >
                <Icon>
                  <i className={data.icon} />
                </Icon>
                <span>{data.title}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}

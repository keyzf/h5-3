import React, { PureComponent } from 'react';
import { Menu, Icon, Drawer } from 'antd';
import VisualSideModel from '../../../containers/visual/sideModel';
import style from './side.module.scss';

export class DropMobileDown extends PureComponent {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={style.mobileSider}>
        <div onClick={this.showDrawer}>
          <Icon type="bars" />列表
        </div>
        <Drawer
          title="插入组件选择"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Menu style={{ border: 'none' }}>
            <Menu.Item key="0">
              <VisualSideModel
                name={'text'}
                child={
                  <div>
                    <i
                      className={'iconfont icon-wenzixiaoguo'}
                      style={{ marginRight: '5px' }}
                    />
                    文字
                  </div>
                }
              />
            </Menu.Item>
            <Menu.Item key="1">
              <VisualSideModel
                name={'img'}
                child={
                  <div>
                    <i
                      className={'iconfont icon-tupian'}
                      style={{ marginRight: '5px' }}
                    />
                    图片
                  </div>
                }
              />
            </Menu.Item>
            <Menu.Item key="2">
              <VisualSideModel
                name={'bg'}
                child={
                  <div>
                    <i
                      className={'icon iconfont icon-beijing'}
                      style={{ marginRight: '5px' }}
                    />背景
                  </div>
                }
              />
            </Menu.Item>
            <Menu.Item key="3">
              <VisualSideModel
                name={'music'}
                child={
                  <div>
                    <i
                      className={'iconfont icon-yinlemusic214'}
                      style={{ marginRight: '5px' }}
                    />
                    音乐
                  </div>
                }
              />
            </Menu.Item>
            <Menu.Item key="4">
              <VisualSideModel
                name={'more'}
                child={
                  <div>
                    <i
                      className={'icon iconfont icon-yingyong'}
                      style={{ marginRight: '5px' }}
                    />更多
                  </div>
                }
              />
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    );
  }
}

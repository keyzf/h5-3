import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import { DropMobileDown } from '../side/sideMobile';
import SaveBtn from '../../../components/saveBtn';
import style from './header.module.scss';

/**
 * visual 页面 mobile端 header 页面
 */
export class HeaderVisualMobile extends PureComponent {
  render() {
    // 项目样式
    const MenuConfig = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };
    return (
      <div className={style.mobileMenu}>
        <Menu {...MenuConfig}>
          <Menu.Item key={'0'}>
            <DropMobileDown />
          </Menu.Item>
          <Menu.Item key={'1'}>
            <SaveBtn name={'save'}>
              <i
                className={'icon iconfont icon-baocun'}
                style={{ marginRight: '10px' }}
              />
              保存
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={'2'}>
            <SaveBtn name={'preview'}>
              <i
                className={'icon iconfont icon-yulan'}
                style={{ marginRight: '10px' }}
              />
              发布设置
            </SaveBtn>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

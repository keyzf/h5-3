import React, { PureComponent } from 'react';
import { Col, Menu, Row } from 'antd';
import style from './header.module.scss';

class HeaderReleaseView extends PureComponent {
  render() {
    const Layout = {
      gutter: 16,
      type: 'flex',
      justify: 'center',
      align: 'center',
      style: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '0',
        overflow: 'hidden',
      },
    };
    const LogoCol = {
      xs: 12,
      sm: 4,
      md: 3,
      lg: 2,
      xl: 2,
    };
    const close_col = {
      xs: 12,
      sm: { span: 4, offset: 16 },
      md: { span: 3, offset: 18 },
      lg: { span: 2, offset: 20 },
      xl: { span: 2, offset: 20 },
    };
    const MenuConfig = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };
    return (
      <Row {...Layout}>
        <Col className={style.col_center} {...LogoCol}>
          <Menu {...MenuConfig}>
            <Menu.Item>
              <a href={'https://www.e7wei.com/'}>
                <div className={style.logo}>易企微</div>
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col {...close_col}>
          <Menu {...MenuConfig}>
            <Menu.Item key="quite">
              <i
                className="icon iconfont icon-iconfonticon2"
                style={{ marginRight: '10px' }}
              />
              关闭
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderReleaseView;

import React, { PureComponent } from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import BtnSave from '../../../app_feature/factory/btn_save.factory';
import style from './header.module.scss';

class HeaderPreviewView extends PureComponent {
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
      xs: 5,
      sm: 5,
      md: 5,
      lg: 3,
      xl: 3,
    };
    const close_col = {
      xs: 19,
      sm: 19,
      md: { span: 10, offset: 9 },
      lg: { span: 6, offset: 15 },
      xl: { span: 6, offset: 15 },
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
        <Col {...close_col} className={style.col_center}>
          <Menu {...MenuConfig}>
            <Menu.Item key="release">
              <BtnSave />
            </Menu.Item>
            <Menu.Item key="save">
              <BtnSave save={true} />
            </Menu.Item>
            <Menu.Item key="quite">
              <Link to={'/visual'}>
                <i
                  className="icon iconfont icon-iconfonticon2"
                  style={{ marginRight: '10px' }}
                />
                关闭
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderPreviewView;

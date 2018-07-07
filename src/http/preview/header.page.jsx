import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import ToReleaseAjax from '../../containers/visual/header/release.ajax';
import ToSaveAjax from '../../containers/visual/header/save.ajax';
import style from './header.module.scss';

class HeaderPreviewView extends React.Component {
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
      lg: 5,
      xl: 3,
    };

    const close_col = {
      xs: 19,
      sm: 19,
      md: 19,
      lg: { span: 6, offset: 13 },
      xl: { span: 7, offset: 14 },
    };
    return (
      <Row {...Layout}>
        <Col className={style.col_center} {...LogoCol}>
          <Menu theme={'dark'} mode={'horizontal'}>
            <Menu.Item>
              <a href={'https://www.e7wei.com/'}>
                <div className={style.logo}>易企微</div>
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col {...close_col} className={style.col_center}>
          <Menu theme={'dark'} style={{ lineHeight: '50px' }} mode="horizontal">
            <Menu.Item key="release">
              <Link to={'/release'}>
                <ToReleaseAjax />
              </Link>
            </Menu.Item>
            <Menu.Item key="save">
              <ToSaveAjax />
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

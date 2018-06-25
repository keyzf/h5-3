import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
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
    const offset_col = {
      xs: 15,
      sm: 15,
      md: 15,
      lg: { span: 9, offset: 2 },
      xl: { span: 8, offset: 6 },
    };
    const close_col = {
      xs: 4,
      sm: 4,
      md: 4,
      lg: { span: 6, offset: 2 },
      xl: { span: 2, offset: 5 },
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
        <Col {...offset_col} />
        <Col {...close_col}>
          <Menu theme={'dark'} style={{ lineHeight: '50px' }} mode="horizontal">
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

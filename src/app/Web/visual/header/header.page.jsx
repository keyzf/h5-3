import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Menu, Row, Dropdown, Icon } from 'antd';
import BtnSave from '../../../Middleware/factory/btn_save.factory';
import style from './header.module.scss';

class HeaderVisualView extends PureComponent {
  render() {
    //选项布局
    const LogoCol = {
      xs: 5,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    };
    const closeCol = {
      xs: 0,
      sm: { span: 20 },
      md: { span: 15, offset: 5 },
      lg: { span: 11, offset: 9 },
      xl: { span: 11, offset: 9 },
    };
    // 项目样式
    const MenuConfig = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={'/'}>
            <div key={'1'}>
              <i
                className={'icon iconfont icon-iconfonticon2'}
                style={{ marginRight: '10px' }}
              />
              关闭
            </div>
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Row className={style.layout} align={'center'} gutter={16} type={'flex'}>
        <Col className={style.col_center} {...LogoCol}>
          <Menu theme={'dark'} mode={'horizontal'}>
            <Menu.Item>
              <a href={'https://www.e7wei.com/'}>
                <img
                  style={{ maxWidth: '100px' }}
                  width={'70%'}
                  height={'25px'}
                  src="http://s.e7wei.com/V002904247QF26S5AD4.png"
                  alt="img"
                />
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col className={style.col_center} {...closeCol}>
          <Menu {...MenuConfig}>
            <Menu.Item
              key={'help'}
              style={{
                border: '1px solid transparent',
                borderImage:
                  'linear-gradient(0deg, rgb(0,186,255),white 50%, rgb(0,186,255))',
                borderImageSlice: '10',
                borderLeft: 'none',
              }}
            >
              <a href={'http://www.e7wei.com/help-article-id-436.html'}>
                <div key={'1'}>
                  <i
                    className={'icon iconfont icon-icon'}
                    style={{ marginRight: '10px' }}
                  />
                  帮助
                </div>
              </a>
            </Menu.Item>

            <Menu.Item key={'save'}>
              <BtnSave save={true} />
            </Menu.Item>
            <Menu.Item key={'preview'}>
              <Link to={'./preview'}>
                <div key={'1'}>
                  <i
                    className={'icon iconfont icon-yulan'}
                    style={{ marginRight: '10px' }}
                  />
                  预览/设置
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key={'release'}>
              <BtnSave />
            </Menu.Item>
            <Menu.Item key={'quite'}>
              <Dropdown overlay={menu} placement="bottomRight">
                <Icon
                  type="bars"
                  style={{ fontSize: '20px', transform: 'translate(0,3px)' }}
                />
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderVisualView;

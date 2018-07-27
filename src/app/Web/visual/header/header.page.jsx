import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Menu, Row } from 'antd';
import BtnSave from '../../../Middleware/factory/btn_save.factory';
import style from './header.module.scss';

class HeaderVisualView extends PureComponent {
  render() {
    //选项布局
    const LogoCol = {
      xs: 5,
      sm: 4,
      md: 4,
      lg: 3,
      xl: 3,
    };
    const closeCol = {
      xs: 0,
      sm: { span: 20 },
      md: { span: 15, offset: 5 },
      lg: { span: 11, offset: 10 },
      xl: { span: 11, offset: 10 },
    };
    // 项目样式
    const MenuConfig = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };

    return (
      <Row className={style.layout} align={'center'} gutter={16} type={'flex'}>
        <Col className={style.col_center} {...LogoCol}>
          <Menu theme={'dark'} mode={'horizontal'}>
            <Menu.Item>
              <a href={'https://www.e7wei.com/'}>
                <div className={style.logo}>易企微</div>
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col className={style.col_center} {...closeCol}>
          <Menu {...MenuConfig}>
            <Menu.Item key={'help'}>
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
        </Col>
      </Row>
    );
  }
}

export default HeaderVisualView;

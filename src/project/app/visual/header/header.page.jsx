import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Menu, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { BtnCleanContent } from './btn_cleanContent';
import { BtnSave } from '../../../common/btn_save.ajax';
import { BtnRelease } from '../../../common/btn_release';
import style from './header.module.scss';

class HeaderVisualView extends PureComponent {
  render() {
    //选项布局
    const LogoCol = {
      xs: 5,
      sm: 5,
      md: 5,
      lg: 4,
      xl: 3,
    };
    const closeCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 20 },
      xl: { span: 14, offset: 7 },
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
                <QueueAnim type={'bottom'} delay={280}>
                  <div key={'1'}>
                    <i
                      className={'icon iconfont icon-icon'}
                      style={{ marginRight: '10px' }}
                    />
                    使用指南
                  </div>
                </QueueAnim>
              </a>
            </Menu.Item>
            <Menu.Item key={'null'}>
              <BtnCleanContent />
            </Menu.Item>
            <Menu.Item key={'save'}>
              <BtnSave />
            </Menu.Item>
            <Menu.Item key={'preview'}>
              <Link to={'./preview'}>
                <QueueAnim type={'bottom'} delay={200}>
                  <div key={'1'}>
                    <i
                      className={'icon iconfont icon-yulan'}
                      style={{ marginRight: '10px' }}
                    />
                    预览/设置
                  </div>
                </QueueAnim>
              </Link>
            </Menu.Item>
            <Menu.Item key={'release'}>
              <Link to={'./release'}>
                <BtnRelease />
              </Link>
            </Menu.Item>
            <Menu.Item key={'quite'}>
              <Link to={'/'}>
                <QueueAnim type={'bottom'} delay={300}>
                  <div key={'1'}>
                    <i
                      className={'icon iconfont icon-iconfonticon2'}
                      style={{ marginRight: '10px' }}
                    />
                    关闭
                  </div>
                </QueueAnim>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderVisualView;

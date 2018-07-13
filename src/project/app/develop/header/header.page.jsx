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
      lg: 5,
      xl: 3,
    };
    const closeCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 15 },
      xl: { span: 12, offset: 5 },
    };
    const col = {
      lg: { span: 4 },
      xl: { span: 4 },
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
        <Col {...closeCol} />
        <Col className={style.col_center} {...col}>
          <Menu {...MenuConfig}>
            <Menu.Item key={'quite'}>
              <Link to={'/json'}>
                <QueueAnim type={'bottom'} delay={300}>
                  <div key={'1'}>json数据查询</div>
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

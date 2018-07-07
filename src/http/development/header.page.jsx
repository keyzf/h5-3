import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Menu, Row } from 'antd';
import VisualSaveAjax from '../../containers/visual/header/save.ajax';
import QueueAnim from 'rc-queue-anim';
import CleanContent from '../../containers/visual/header/clean_content';
import ToPreviewAjax from '../../containers/visual/header/release.ajax';
import style from './header.module.scss';

/**
 * 实现目标：
 * 1、 在大屏下显示选项
 * 2. 在小屏幕下显示logo与面包菜单
 */
class HeaderDevelopmentView extends PureComponent {
  /**
   * 渲染
   */
  render() {
    //选项布局
    const LogoCol = {
      xs: 5,
      sm: 5,
      md: 5,
      lg: 5,
      xl: 5,
    };
    const chooseCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 12 },
      xl: { span: 10, offset: 3 },
    };
    const closeCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 7 },
      xl: { span: 5, offset: 1 },
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
        {/*logo*/}
        <Col className={style.col_center} {...LogoCol}>
          <Menu theme={'dark'} mode={'horizontal'}>
            <Menu.Item>
              <a href={'https://www.e7wei.com/'}>
                <div className={style.logo}>易企微</div>
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        {/*选项*/}
        <Col className={style.col_center} {...chooseCol}>
          <Menu {...MenuConfig}>
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
            <Menu.Item key={'save'}>
              <VisualSaveAjax />
            </Menu.Item>
            <Menu.Item key={'release'}>
              <Link to={'./release'}>
                <ToPreviewAjax />
              </Link>
            </Menu.Item>
            <Menu.Item key={'null'}>
              <CleanContent />
            </Menu.Item>
          </Menu>
        </Col>
        <Col className={style.col_center} {...closeCol}>
          <Menu {...MenuConfig}>
            <Menu.Item key={'json'}>
              <Link to={'/json'}>
                <QueueAnim type={'bottom'} delay={300}>
                  <div key={'1'}>
                    <i
                      className={'icon iconfont icon-iconfonticon2'}
                      style={{ marginRight: '10px' }}
                    />
                    JSON
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

export default HeaderDevelopmentView;

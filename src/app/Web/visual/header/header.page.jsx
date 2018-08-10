import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Menu, Row, Button, Icon } from 'antd';
import BtnSave from '../../../Middleware/factory/btn_save.factory';
import style from './header.module.scss';

class HeaderVisualView extends PureComponent {
  render() {
    //选项布局
    const LogoCol = {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 12,
      xl: 11,
    };
    const closeCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 12 },
      xl: { span: 11, offset: 2 },
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
            <Menu.Item
              style={{
                borderRight: '1px solid rgb(0,187,255)',
              }}
            >
              <a href={'#'} onClick={`javascript :history.back(1)`}>
                <i
                  className="icon iconfont icon-zuojiantou"
                  style={{ fontWeight: 'bold', fontSize: '20px' }}
                />
              </a>
            </Menu.Item>
            <Menu.Item
              style={{
                borderRight: '1px solid rgb(0,187,255)',
              }}
            >
              <a
                href={'http://my.e7wei.com/package/index.html'}
                target={'view_window'}
              >
                <Button style={{ border: 'none' }}>
                  <i
                    className="icon iconfont icon-huiyuan"
                    style={{ color: 'rgb(255,181,71)' }}
                  />
                  <span style={{ marginLeft: '3px', color: 'rgb(255,181,71)' }}>
                    升级续费
                  </span>
                </Button>
              </a>
            </Menu.Item>
            <Menu.Item
              key={'help131'}
              style={{
                borderRight: '1px solid rgb(0,187,255)',
              }}
            >
              <a
                href={'http://www.e7wei.com/help-article-id-436.html'}
                target={'view_window'}
              >
                <div key={'1'}>
                  <Icon type="question-circle-o" />
                  帮助中心
                </div>
              </a>
            </Menu.Item>
            <Menu.Item key={'help3425'}>
              <a
                href={'http://www.e7wei.com/help-article-id-409.html'}
                target={'view_window'}
              >
                <div key={'1'}>
                  <Icon type="exclamation-circle-o" />
                  内容规范
                </div>
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col className={style.col_center} {...closeCol}>
          <Menu {...MenuConfig}>
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
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderVisualView;

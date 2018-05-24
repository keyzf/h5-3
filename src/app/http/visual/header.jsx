import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import { $$logo_database } from '../../../database/layout/logo_database';

class HeaderVisualView extends React.Component {
  render() {
    const LayoutRow = {
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
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignCenter: 'center',
        margin: 'auto',
      },
    };
    const chooseCol = {
      xs: 15,
      sm: 15,
      md: 15,
      lg: { span: 9, offset: 2 },
      xl: { span: 8, offset: 6 },
    };
    const chooseMenu = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };
    const chooseData = [
      {
        name: 'preview',
        link: './preview',
        icon: 'icon iconfont icon-yulan',
        style: { marginRight: '10px' },
        content: '预览/设置',
      },
      {
        name: 'save',
        link: '',
        icon: 'icon iconfont icon-baocun',
        style: { marginRight: '10px' },
        content: '保存',
      },
      {
        name: 'release',
        link: './release',
        icon: 'icon iconfont icon-fabu',
        style: { marginRight: '10px' },
        content: '发布',
      },
    ];
    const closeCol = {
      xs: 4,
      sm: 4,
      md: 4,
      lg: { span: 6, offset: 2 },
      xl: { span: 2, offset: 5 },
    };
    const closeMenu = {
      selectable: false,
      theme: 'dark',
      style: { lineHeight: '50px' },
      mode: 'horizontal',
    };
    const closeData = {
      name: 'quite',
      link: '' /**TODO 退出链接(可编辑属性)**/,
      icon: 'icon iconfont icon-iconfonticon2',
      style: { marginRight: '10px' },
      content: '关闭',
    };
    const MenuItem = data => {
      return (
        <Menu.Item
          key={data.name}
          onClick={data.name === 'save' ? data.onClick : ''}
        >
          <Link to={data.link}>
            <i className={data.icon} style={data.style} />
            {data.content}
          </Link>
        </Menu.Item>
      );
    };
    return (
      <Row {...LayoutRow}>
        <Col {...LogoCol}>
          <img
            src={$$logo_database.get('url')}
            width={$$logo_database.get('width')}
            height={$$logo_database.get('height')}
            alt={'e7wei_logo'}
          />
        </Col>
        <Col {...chooseCol}>
          <Menu {...chooseMenu}>
            {chooseData.map(data => {
              return MenuItem(data);
            })}
          </Menu>
        </Col>
        <Col {...closeCol}>
          <Menu {...closeMenu}>{MenuItem(closeData)}</Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderVisualView;

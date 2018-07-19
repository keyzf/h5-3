import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import connect from '../../redux/decorator';
import SiderVisualView from '../visual/side/side.page';
import HeaderVisualView from './header/header.page';
import EditorVisualView from '../visual/editor/editor.page';
import ContentVisualView from '../visual/content/content.page';
import style from './visual.module.scss';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';

@connect
export default class DevelopView extends PureComponent {
  render() {
    const { Header, Sider, Content } = Layout;
    const editorConfig = {
      collapsedWidth: 0,
      width: 380,
      collapsible: true,
      trigger: null,
      breakpoint: 'md',
    };
    console.log('dev');
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <HeaderVisualView />
        </Header>
        <Layout className={style.content}>
          <SiderVisualView className={'side'} />
          <Content>
            <div className={'content'}>
              <ContentVisualView />
            </div>
          </Content>
          <Sider className={style.side} {...editorConfig}>
            <div className={'editor'}>
              <EditorVisualView />
            </div>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

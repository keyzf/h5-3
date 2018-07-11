import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import HeaderPreviewView from './header/header.page';
import ContentPreviewView from './content/content.page';
import EditorPreviewView from './side/editor';
import style from './preview.module.scss';

class PreviewView extends PureComponent {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <QueueAnim type={'bottom'} className={style.layout}>
        <Header className={style.header} key={'animation_one'}>
          <HeaderPreviewView />
        </Header>
        <Layout style={{ height: '94%' }} key={'animation_two'}>
          <Content style={{ height: '100%' }}>
            <ContentPreviewView />
          </Content>
          <Sider className={style.side} breakpoint="md" width={450}>
            <EditorPreviewView />
          </Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default PreviewView;

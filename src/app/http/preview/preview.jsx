import React from 'react';
import { Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import HeaderPreviewView from './header';
import ContentPreviewView from './content';
import EditorPreviewView from '../../model/preview/preview_editor';
import './_core.css';

class PreviewView extends React.Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <QueueAnim type={'bottom'} className={'preview_layout'}>
        <Header className={'preview_header'} key={'animation_one'}>
          <HeaderPreviewView />
        </Header>
        <Layout style={{ height: '94%' }} key={'animation_two'}>
          <Content style={{ height: '100%' }}>
            <ContentPreviewView />
          </Content>
          <Sider className={'preview_sider'} breakpoint="md" width={450}>
            <EditorPreviewView />
          </Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default PreviewView;

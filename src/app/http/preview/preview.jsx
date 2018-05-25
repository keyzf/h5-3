import React from 'react';
import { Layout } from 'antd';
import HeaderPreviewView from './header';
import ContentPreviewView from './content';
import EditorPreviewView from '../../model/preview/preview_editor';
import './_core.css';

class PreviewView extends React.Component {
  render() {
    return (
      <Layout className={'preview_layout'}>
        <Layout.Header className={'preview_header'}>
          <HeaderPreviewView />
        </Layout.Header>
        <Layout style={{ height: '94%' }}>
          <Layout.Content style={{ height: '100%' }}>
            <ContentPreviewView />
          </Layout.Content>
          <Layout.Sider className={'preview_sider'} breakpoint="md" width={450}>
            <EditorPreviewView />
          </Layout.Sider>
        </Layout>
      </Layout>
    );
  }
}

export default PreviewView;

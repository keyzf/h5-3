import React from 'react';
import { Layout } from 'antd';
import HeaderReleaseView from './header.page';
import ContentReleaseView from './content';
import EditorReleaseView from './editor.page';
import './_core.css';

class ReleaseView extends React.Component {
  render() {
    return (
      <Layout className={'release_layout'}>
        <Layout.Header className={'release_header'}>
          <HeaderReleaseView />
        </Layout.Header>
        <Layout style={{ height: '94%' }}>
          <Layout.Content style={{ height: '100%' }}>
            <ContentReleaseView />
          </Layout.Content>
          <Layout.Sider className={'release_sider'} breakpoint="md" width={600}>
            <EditorReleaseView />
          </Layout.Sider>
        </Layout>
      </Layout>
    );
  }
}

export default ReleaseView;

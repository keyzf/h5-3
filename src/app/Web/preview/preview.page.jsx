import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import HeaderPreviewView from './header/header.page';
import PhoneCommonView from '../_common/phone';
import EditorPreviewView from './editor/editor';
import style from './preview.module.scss';

class PreviewView extends PureComponent {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <div className={style.layout}>
        <Header className={style.header}>
          <HeaderPreviewView />
        </Header>
        <Layout style={{ height: '94%' }}>
          <Content style={{ height: '100%' }}>
            <PhoneCommonView />
          </Content>
          <Sider className={style.side} breakpoint="md" width={450}>
            <EditorPreviewView />
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default PreviewView;

import React from 'react';
import { Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import HeaderReleaseView from './header.page';
import ContentReleaseView from './content.page';
import EditorReleaseView from './editor.page';
import style from './release.module.scss';

class ReleaseView extends React.Component {
  render() {
    return (
      <QueueAnim type={'bottom'} className={style.layout}>
        <Layout.Header className={style.header} key={'one'}>
          <HeaderReleaseView />
        </Layout.Header>
        <Layout style={{ height: '94%' }} key={'two'}>
          <Layout.Content style={{ height: '100%' }}>
            <ContentReleaseView />
          </Layout.Content>
          <Layout.Sider className={style.sider} breakpoint="md" width={600}>
            <EditorReleaseView />
          </Layout.Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default ReleaseView;

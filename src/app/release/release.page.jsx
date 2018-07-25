import React from 'react';
import { Layout } from 'antd';
import HeaderReleaseView from './header/header.page';
import PhoneCommonView from '../_common/phone';
import EditorReleaseView from './editor/editor.page';
import style from './release.module.scss';

class ReleaseView extends React.Component {
  render() {
    return (
      <div className={style.layout}>
        <Layout.Header className={style.header} key={'one'}>
          <HeaderReleaseView />
        </Layout.Header>
        <Layout style={{ height: '94%' }} key={'two'}>
          <Layout.Content style={{ height: '100%' }}>
            <PhoneCommonView />
          </Layout.Content>
          <Layout.Sider className={style.sider} breakpoint="md" width={600}>
            <EditorReleaseView />
          </Layout.Sider>
        </Layout>
      </div>
    );
  }
}

export default ReleaseView;

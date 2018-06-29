/**
 * 实现目标：
 * 1. 划分页面布局
 * 2. 组件加载完毕后查询屏幕分辨率，给出提示信息
 */
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import HeaderDevelopmentView from './header.page';
import style from './development.module.scss';

/**
 * visual 页面父级组件
 */
class DevelopmentView extends PureComponent {
  render() {
    const { Header, Sider, Content } = Layout;
    const editorConfig = {
      collapsedWidth: 0,
      width: 380,
      collapsible: true,
      trigger: null,
      breakpoint: 'md',
    };
    return (
      <React.Fragment>
        <div className={style.layout}>
          <Header className={style.header}>
            <HeaderDevelopmentView />
          </Header>
          {/*<Layout className={style.content}>*/}
            {/*/!*侧边栏*!/*/}
            {/*<div className={'side'} style={{ backgroundColor: 'white' }}>*/}
              {/*<VisualSideLoadable />*/}
            {/*</div>*/}
            {/*<VisualUiShowLoadable />*/}
            {/*<Content>*/}
              {/*<div className={'content'}>*/}
                {/*<VisualContentLoadable />*/}
              {/*</div>*/}
            {/*</Content>*/}
            {/*<Sider className={style.side} {...editorConfig}>*/}
              {/*<VisualEditorLoadable />*/}
            {/*</Sider>*/}
          {/*</Layout>*/}
        </div>
      </React.Fragment>
    );
  }
}

export default DevelopmentView;

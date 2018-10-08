/**
 * @description:发送action---渲染visual页面
 * @author:陈迎2018年10月08日13:49:35
 * @version:0.9x
 */
import * as React from 'react';
import Layout from 'antd/lib/layout';
import VisualNav from '../components/visual/nav';
// import VisualSider from '../components/visual/sider';
// import VisualContent from '../components/visual/content';

class Visual extends React.Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={'layout'}>
        <Header className={'header'}>
          <VisualNav/>
        </Header>
        <Layout>
          <Sider theme={'light'} width={332} breakpoint={'md'} trigger={null}>
            {/*<VisualSider/>*/}
          </Sider>

          <Content className={'content'} id={'content'}>
            {/*<VisualContent/>*/}
          </Content>

          <Sider theme={'light'} width={332} breakpoint={'md'} trigger={null}/>
        </Layout>
      </Layout>
    );
  }
}

export default Visual;

import * as React from 'react';
import Layout from 'antd/lib/layout';

interface Props {
  vid: string;
  state: string;
}

class Visual extends React.Component<Props, null> {

  /**
   * 获取相应数据
   */
  componentDidMount() {

  }

  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={'layout'}>
        <Header className={'header'}/>
        <Layout>
          <Sider theme={'light'} width={360} breakpoint={'md'} trigger={null}/>

          <Content className={'content'} id={'content'}/>

          <Sider theme={'light'} width={360} breakpoint={'md'} trigger={null}/>
        </Layout>
      </Layout>
    );
  }
}

export default Visual;

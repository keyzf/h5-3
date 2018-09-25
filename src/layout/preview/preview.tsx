import * as React from 'react';
import Layout from 'antd/lib/layout';
import Card from 'antd/lib/card';

interface Props {
  vid: string;
  state: string;
}

class Preview extends React.PureComponent<Props, null> {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={'layout'}>
        <Header className={'header'}/>
        <Layout>
          <Content className={'content'}/>
          <Sider theme={'light'} width={360} breakpoint={'md'} trigger={null}>
            <Card title="微信显示效果">
              <img
                alt={'img'}
                src={'http://src.e7wei.com/0.6405794268218221.png'}
                width={'100%'}
                height={'100%'}
              />
              <br/>
              <br/>
              <br/>
              <br/>
            </Card>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default Preview;

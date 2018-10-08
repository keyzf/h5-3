import * as React from 'react';
import Layout from 'antd/lib/layout';
// import Card from 'antd/lib/card';
// import PreviewHeader from '../components/preview/header';
// import PreviewContent from '../components/preview/content';


class Preview extends React.Component<null, null> {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={'layout'}>
        <Header className={'header'}>
          {/*<PreviewHeader vid={this.props.vid}/>*/}
        </Header>
        <Layout>
          <Content className={'content'}>
            {/*<PreviewContent/>*/}
          </Content>
          <Sider theme={'light'} width={360} breakpoint={'md'} trigger={null}>
            {/*<Card title="微信显示效果">*/}
              {/*<img*/}
                {/*alt={'img'}*/}
                {/*src={'http://src.e7wei.com/0.6405794268218221.png'}*/}
                {/*width={'100%'}*/}
                {/*height={'100%'}*/}
              {/*/>*/}
              {/*<br/>*/}
              {/*<br/>*/}
              {/*<br/>*/}
              {/*<br/>*/}
            {/*</Card>*/}
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default Preview;

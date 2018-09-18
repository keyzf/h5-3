import * as React from "react";
import Layout from "antd/lib/layout";
import "../pageStyles.scss";

interface Props {
  vid: string;
  state: string;
}

class Visual extends React.PureComponent<Props, any> {
  render() {
    const { Header, Sider, Content } = Layout;

    return (
      <Layout className={"layout"}>
        <Header className={"header"}>头部</Header>
        <Layout>
          <Sider theme={"light"} width={360} breakpoint={"md"} trigger={null}>
            侧边栏
          </Sider>

          <Content>内容区域</Content>

          <Sider theme={"light"} width={360} breakpoint={"md"} trigger={null}>
            侧边栏
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default Visual;

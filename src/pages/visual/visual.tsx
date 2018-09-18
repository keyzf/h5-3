import * as React from "react";
import Layout from "antd/lib/layout";
import VisualHeader from "../../components/visual/header";
import VisualSider from "../../components/visual/sider";
import VisualContent from "../../components/visual/content";

interface Props {
  vid: string;
  state: string;
}

class Visual extends React.PureComponent<Props, any> {
  render() {
    const { Header, Sider, Content } = Layout;

    return (
      <Layout className={"layout"}>
        <Header className={"header"}>
          <VisualHeader/>
        </Header>
        <Layout>
          <Sider theme={"light"} width={360} breakpoint={"md"} trigger={null}>
            <VisualSider/>
          </Sider>

          <Content className={"content"}>
            <VisualContent/>
          </Content>

          <Sider theme={"light"} width={360} breakpoint={"md"} trigger={null}>

          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default Visual;

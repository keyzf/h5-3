import * as React from "react";
import { Layout } from "antd";
import style from "../../public/assets/layout.scss";

class Preview extends React.Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={style.layout}>
        <Header className={style.header} />
        <Layout>
          <Content className={style.content} />
          <Sider theme={"light"} width={360} breakpoint={"md"} trigger={null} />
        </Layout>
      </Layout>
    );
  }
}

export default Preview;

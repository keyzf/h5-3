import React from "react";
import { Layout } from "antd";
import QueueAnim from "rc-queue-anim";
import HeaderPreviewView from "./header.page";
import ContentPreviewView from "./content.page";
import EditorPreviewView from "../../common/preview/preview_editor";
import style from "./preview.module.scss";

class PreviewView extends React.Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <QueueAnim type={"bottom"} className={style.layout}>
        <Header className={style.header} key={"animation_one"}>
          <HeaderPreviewView/>
        </Header>
        <Layout style={{ height: "94%" }} key={"animation_two"}>
          <Content style={{ height: "100%" }}>
            <ContentPreviewView/>
          </Content>
          <Sider className={style.side} breakpoint="md" width={450}>
            <EditorPreviewView/>
          </Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default PreviewView;

import React, { PureComponent } from "react";
import { Layout } from "antd";
import HeaderPreviewView from "./header/header.page";
import PhoneCommonView from "../_common/phone";
import EditorPreviewView from "./editor/editor";
import style from "./preview.module.scss";


class PreviewView extends PureComponent {
  componentWillMount() {
    document.title = "易企微 | 一站式微信营销平台";
  }
  componentDidMount() {
    try {
      document.getElementById("h5_audio").play();
    } catch (error) {
      return "";
    }
  }
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <div className={style.layout}>
        <Header className={style.header}>
          <HeaderPreviewView/>
        </Header>
        <Layout style={{ height: "calc(100% - 48px)" }}>
          <Content className={style.s}>
            <PhoneCommonView/>
          </Content>
          <Sider className={style.side} breakpoint="md" width={450}>
            <div className={style.s}>
              <EditorPreviewView/>
            </div>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default PreviewView;

import React, { PureComponent } from "react";
import { Layout } from "antd";
import HeaderPreviewView from "./header/header.page";
import PhoneCommonView from "../_common/phone";
import EditorPreviewView from "./editor/editor";
import style from "./preview.module.scss";
import { access_api } from "../../../api/access.api";
import { redux_action } from "../../../database/redux/action";
import connect from "react-redux/es/connect/connect";

class PreviewView extends PureComponent {
  componentWillMount() {
    document.title = "易企微 | 一站式微信营销平台";
    access_api(this.props.sid, this.props.state, this.props.upData)
      .then()
      .catch(error => {
        window.location.href = error;
      });
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

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PreviewView);

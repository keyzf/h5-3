import * as React from "react";
import Layout from "antd/lib/layout";
import VisualHeader from "../../components/visual/header";
import VisualSider from "../../components/visual/sider";
import VisualContent from "../../components/visual/content";
import { Provider } from "../../context/context";

interface Props {
  vid: string;
  state: string;
}

interface State {
  version: string, // 使用数据的版本号
  pv: string, // pv数

  ui: object[], // ui组件数据源
  bg: { img: string, color: string }, //背景组件
  music: string, //音乐组件

  editor: { data: string, number: string }, //当前编辑的组件数据

  cover: string, //分享图片
  desc: string, // 分享描述
  title: string, // 分享标题

  url: string, //发布链接

  post: object, // ajax函数更新数据
  add: object, // 向ui中添加数据
  delete: object // 删除ui中的数据
}

class Visual extends React.PureComponent<Props, State> {

  state = {
    version: "1", // 使用数据的版本号
    pv: "1", // pv数

    ui: [], // ui组件数据源
    bg: { img: "", color: "" }, //背景组件
    music: "1", //音乐组件

    editor: { data: "", number: "" }, //当前编辑的组件数据

    cover: "", //分享图片
    desc: "", // 分享描述
    title: "", // 分享标题

    url: "", //发布链接

    post: () => {
    }, // ajax函数更新数据
    add: () => {
    }, // 向ui中添加数据
    delete: () => {
    }// 删除ui中的数据
  };

  componentWillMount = () => {
    this.setState({
      post: this.post, // ajax函数更新数据
      add: this.add, // 向ui中添加数据
      delete: this.delete // 删除ui中的数据
    });
  };

  post = () => {

  };

  add = () => {

  };

  delete = () => {

  };


  render() {
    const { Header, Sider, Content } = Layout;

    return (
      <Provider value={this.state}>
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
      </Provider>
    );
  }
}

export default Visual;

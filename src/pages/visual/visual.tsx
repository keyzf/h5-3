import * as React from "react";
import Layout from "antd/lib/layout";
import VisualHeader from "../../components/visual/header";
import VisualSider from "../../components/visual/sider";
import VisualContent from "../../components/visual/content";
import { Provider } from "../../context/context";
import addDataToH5 from "../../context/add";
import $$bg_db from "../../resources/bg/bg.db";

interface Props {
  vid: string;
  state: string;
}

interface State {
  version: string; // 使用数据的版本号
  pv: string; // pv数

  ui: object[]; // ui组件数据源
  bg: {
    common: {
      type: string;
      name: string;
    };
    base: {
      img: string;
      color: string;
      height: number;
    };
  }; //背景组件
  music: string; //音乐组件

  editor: { data: object; index: number }; //当前编辑的组件数据

  cover: string; //分享图片
  desc: string; // 分享描述
  title: string; // 分享标题

  url: string; //发布链接

  add: object; // 向ui中添加数据
  draggable: object; // 组件移动
  clickUi: object;
  optionUi: object; //对ui进行的操作箱，比如删除，
}

class Visual extends React.Component<Props, State> {
  state = {
    version: "1", // 使用数据的版本号
    pv: "1", // pv数

    ui: [], // ui组件数据源
    bg: { ...$$bg_db }, //背景组件
    music: "1", //音乐组件

    editor: { data: {}, index: -1 }, //当前编辑的组件数据

    cover: "", //分享图片
    desc: "", // 分享描述
    title: "", // 分享标题

    url: "", //发布链接

    add: () => {
    }, // 向ui中添加数据
    draggable: () => {
    }, // 组件移动
    clickUi: () => {
    },
    optionUi: () => {
    } //对ui进行的操作箱，比如删除，
  };

  componentWillMount = () => {
    this.setState({
      add: this.add, // 向ui中添加数据
      draggable: this.draggable, // 组件移动
      clickUi: this.clickUi,
      optionUi: this.optionUi
    });
  };

  optionUi = (name: string) => {
    const { editor } = this.state;
    const ui = this.state.ui;
    this.setState({
      ui: ui.splice(1 , 1)
    });

    if (name === "up") {
      [ui[editor.index - 1], ui[editor.index]] = [
        ui[editor.index],
        ui[editor.index + 1]
      ];
      this.setState({
        ui: ui
      });
    }
    if (name === "down") {
      [ui[editor.index + 1], ui[editor.index]] = [
        ui[editor.index],
        ui[editor.index - 1]
      ];
      this.setState({
        ui: ui
      });
    }
    if (name === "delete") {

    }
    if (name === "copy") {
      this.setState({
        ui: ui.splice(editor.index + 1, 0, ui)
      });
    }
  };


  /**
   * 向ui中添加组件数据
   * 并设置组件定位
   * @param data
   */
  add = (data: { position: { top; left; width; height } }) => {
    let new_data: object[] = this.state.ui;
    const pushData = addDataToH5(data);
    new_data.push(pushData);
    this.setState({
      ui: new_data,
      editor: { data: pushData, index: new_data.length - 1 }
    });
  };

  draggable = (
    data: { common: object; position: object; base: object },
    index: number
  ) => {
    const new_ui = this.state.ui;
    new_ui.splice(index, 1, { ...data });
    this.setState({
      ui: new_ui
    });
  };

  clickUi = (
    data: { common: object; position: object; base: object },
    index: number
  ) => {
    this.setState({
      editor: { data: data, index: index }
    });
  };



  render() {
    const { Header, Sider, Content } = Layout;
    console.log(this.state.ui);
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

            <Content className={"content"} id={"content"}>
              <VisualContent/>
            </Content>

            <Sider
              theme={"light"}
              width={360}
              breakpoint={"md"}
              trigger={null}
            />
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default Visual;

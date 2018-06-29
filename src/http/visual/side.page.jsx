import React, { PureComponent } from "react";
import { List } from "immutable";
import { connect } from "react-redux";
import { Menu, Icon, Layout } from "antd";
import { redux_action } from "../../redux/action";

class SiderVisualView extends PureComponent {
  state = {
    collapsed: true
  };
  /**
   * 更新组件状态，并发送数据给数据集
   * @param collapsed
   */
  onCollapse = collapsed => {
    /**
     * 如果状态为真，则将show_ui收缩
     */
    if (collapsed) {
      this.props.upData("UI_SELECT", { name: "", menuChoose: null });
    }
    this.setState({ collapsed });
  };
  /**
   * 如果用户选择了某个组件，则将此组件展示出来
   * @param name
   * @param index
   */
  onShow = (name, index) => {
    this.props.upData("UI_SELECT", { name: name, menuChoose: index });
  };

  render() {
    const { Sider } = Layout;
    const $$visual_sider_database = List([
      {
        icon: "iconfont icon-wenzixiaoguo",
        title: "文字",
        name: "text"
      },
      {
        icon: "iconfont icon-tupian",
        title: "图片",
        name: "img"
      },
      {
        icon: "iconfont icon-yinlemusic214",
        title: "音乐",
        name: "music"
      },
      {
        icon: "iconfont icon-shipin",
        title: "视频",
        name: "video"
      },
      {
        icon: "iconfont icon-unie62d",
        title: "商品",
        name: "mall"
      },
      {
        icon: "icon iconfont icon-zhinengyuyinjiaohu",
        title: "互动",
        name: "lnteractive"
      }
    ]);
    const $$menuChoose = this.props.ui_select_value.data.get("menuChoose");
    return (
      <Sider
        style={{ background: "white" }}
        width={120}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu mode="inline" selectedKeys={[`${$$menuChoose}`]} className={"side"} style={{ border: "none" }}>
          {$$visual_sider_database.map((data, index) => {
            return (
              <Menu.Item
                key={index}
                style={{ marginTop: 0 }}
                onClick={this.onShow.bind(this, data.name, index)}
              >
                <Icon>
                  <i className={data.icon}/>
                </Icon>
                <span>{data.title}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return {
    ui_select_value: state.ui_h5_data_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiderVisualView);

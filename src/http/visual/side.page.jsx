import React, { PureComponent } from "react";
import { Menu, Icon, Layout } from "antd";
import { List, Map } from "immutable";
import { connect } from "react-redux";
import { visual_ui_show_action } from "../../redux/action";

/**
 * 将侧边栏数据遍历出来
 * 数据：
 * 1. 项目头 icon ，名称
 * 2. 项目 内容
 */
class SiderVisualView extends PureComponent {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    if (collapsed) {
      this.props.visual_ui_show_upData(Map({ name: "" }), "", "");
    }

    this.setState({ collapsed });
  };

  onShow = name => {
    this.props.visual_ui_show_upData(Map({ name: name }), "", "");
  };

  render() {
    // 侧边栏显示数据 ->select 中data 数据指向的是common 文件中database/select_database_common文件
    const $$visual_sider_database = List([
      // 文字
      {
        icon: "iconfont icon-wenzixiaoguo",
        title: "文字",
        name: "text"
      },
      // 图片
      {
        icon: "iconfont icon-tupian",
        title: "图片",
        name: "img"
      },
      // 音乐
      {
        icon: "iconfont icon-yinlemusic214",
        title: "音乐",
        name: "music"
      },
      // 视频
      {
        icon: "iconfont icon-shipin",
        title: "视频",
        name: "video"
      },
      // 商品
      {
        icon: "iconfont icon-unie62d",
        title: "商品",
        name: "mall"
      },
      // 互动
      {
        icon: "icon iconfont icon-zhinengyuyinjiaohu",
        title: "互动",
        name: "lnteractive"
      }
    ]);

    return (
      <Layout.Sider
        style={{ background: "white" }}
        width={120}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu mode="inline" defaultSelectedKeys={['0']}>
          {$$visual_sider_database.map((data, index) => {
            return (
              <Menu.Item
                key={index}
                style={{ marginTop: 0 }}
                onClick={this.onShow.bind(this, data.name)}
              >
                <Icon>
                  <i className={data.icon}/>
                </Icon>
                <span>{data.title}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Layout.Sider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    visual_ui_show_upData: (data, meta, error) =>
      dispatch(visual_ui_show_action(data, meta, error))
  };
};

export default connect("", mapDispatchToProps)(SiderVisualView);

/**
 * 可伸缩侧边栏
 */
import React, { PureComponent } from "react";
import { Menu, Icon, Layout } from "antd";
import { List, fromJS } from "immutable";
import { connect } from "react-redux";

/**
 * 将侧边栏数据遍历出来
 * 数据：
 * 1. 项目头 icon ，名称
 * 2. 项目 内容
 */
class SiderVisualView extends PureComponent {
  /**
   * 控制menu组件的收缩与展开
   * @type {{collapsed: boolean}}
   */
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
      this.props.visual_ui_show_upData(fromJS({ name: "", menuChoose: null }));
    }
    this.setState({ collapsed });
  };
  /**
   * 如果用户选择了某个组件，则将此组件展示出来
   * @param name
   * @param index
   */
  onShow = (name, index) => {
    this.props.visual_ui_show_upData(fromJS({ name: name, menuChoose: index }));
  };

  /**
   * 渲染
   * @returns {*}
   */
  render() {
    /**
     * @type {*|Immutable.List<any>}
     */
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
    const { Sider } = Layout;
    const $$menuChoose = this.props.visual_ui_show_value.data.get("menuChoose");
    return (
      <Sider
        style={{ background: "white" }}
        width={120}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu mode="inline" selectedKeys={[`${$$menuChoose}`]}>
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

/**
 * 触发器
 * @param type
 * @param data
 * @returns {{type: *, payload: *, meta: string, error: string}}
 */
const action = (type, data) => {
  return {
    type: type,
    payload: data,
    meta: "",
    error: ""
  };
};

/**
 * 读取数据源数据
 * @param state
 * @returns {{visual_ui_show_value: *}}
 */
const mapStateToProps = state => {
  return {
    visual_ui_show_value: state.visual_ui_show_reducer
  };
};

/**
 * 需要修改数据的数据源
 * @param dispatch
 * @returns {{visual_ui_show_upData: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    visual_ui_show_upData: data => dispatch(action("VISUAL_UI_SHOW", data))
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(SiderVisualView);

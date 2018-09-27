import React, { PureComponent } from "react";
import { message } from "antd";
import { connect } from "react-redux";
import NProgress from "nprogress";
import { save_ajax } from "../api/save.api";
import "nprogress/nprogress.css";

/**
 * 数据提交给后台
 */
class SaveBtn extends PureComponent {


  /**
   * 数据提交给后台
   */
  onSave = () => {
    // 上传进度动画
    NProgress.start();
    // 提取 renducer 中的数据
    let form = [];
    this.props.h5_data_value.data.map(map_data => {
      if (map_data.getIn(["customize", "type"]) === "form") {
        map_data.getIn(["customize", "item"]).map((data, index) => {
          form[index] = {
            form_id: data.get("form_id"),
            name: data.getIn(["title", "value"])
          };
          return "";
        });
        return "";
      }
      return "";
    });
    const data = {
      sid: this.props.sid_value.data.get("sid"),
      bg: this.props.bg_ui_value.data.toJS(),
      ui: this.props.h5_data_value.data.toJS(),
      cover: this.props.shareMsg_value.data.get("cover"),
      desc: this.props.shareMsg_value.data.get("desc") ? this.props.shareMsg_value.data.get("desc") : "我的分享",
      title: this.props.shareMsg_value.data.get("title") ? this.props.shareMsg_value.data.get("title") : "我的页面",
      music: this.props.music_ui_value.data.toJS(),
      form: form
    };

    // ajax 提交操作
    save_ajax(data)
      .then(() => {
        NProgress.done();
        if (this.props.name === "release") {
          message.success("发布成功");
          window.location.href = `${this.props.release_value.data.get("url")}`;
          return "";
        }
        if (this.props.name === "preview") {
          message.success("保存成功");
          window.location.href = `${
            window.location.origin
            }/p/${data.sid}`;
          return "";
        }
        else {
          message.success("保存成功");
          return "";
        }
      })
      .catch(() => {
        NProgress.done();
        message.error("数据提交失败，请重试");
        return "";
      });
  };

  render() {
    return <div onClick={this.onSave}>{this.props.children}</div>;
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 用户分享H5的传播信息
    shareMsg_value: state.shareMsg_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
    // 解析url,获取用户id
    sid_value: state.sid_rdc,
    // 用户发布信息
    release_value: state.release_rdc,
    // 音乐组件信息
    music_ui_value: state.musicUi_rdc
  };
};

export default connect(mapStateToProps)(SaveBtn);

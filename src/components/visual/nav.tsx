import React, { Component } from "react";
import { Menu, Button, message } from "antd";
import { inject, observer } from "mobx-react";
import { IRootStore } from "../../store/root-store";
import style from "../../../public/assets/components.scss";
import NavItemLog from "./navItem-log";

interface IProps {
  store?: IRootStore;
}

interface IState {}

@inject("store")
@observer
export default class VisualNav extends Component<IProps, IState> {
  // 撤销
  cancel = () => {
    // this.props.action.cancel();
  };

  // 恢复
  restore = () => {
    // this.props.action.restore();
  };

  // 数据提交给后台
  postData = (name: string) => {
    this.props.store
      .postAllData()
      .then(response => {
        switch (name) {
          case "release":
            return (window.location.href = `${window.location.origin}/r/${
              this.props.store.id
            }`);
          case "preview":
            return (window.location.href = `${window.location.origin}/p/${
              this.props.store.id
            }`);
          default:
            message.success(response);
        }
      })
      .catch(error => {
        message.error(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Menu
          className={style.leftPosition}
          selectable={false}
          mode={"horizontal"}
        >
          <Menu.Item className={style.borderRight} key={0}>
            <a href={`${window.location.origin}/long/index.html`}>
              <i
                className="iconfont icon-zuojiantou"
                style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}
              />
            </a>
          </Menu.Item>
          <Menu.Item key={1}>
            <a
              href={"http://my.e7wei.com/package/index.html"}
              target={"view_window"}
            >
              <Button
                htmlType={"button"}
                style={{ border: "none", color: "white" }}
              >
                <i
                  className="icon iconfont icon-huiyuan"
                  style={{ color: "rgb(255,181,71)" }}
                />
                <span style={{ marginLeft: "3px", color: "rgb(255,181,71)" }}>
                  升级续费
                </span>
              </Button>
            </a>
          </Menu.Item>
        </Menu>
        <Menu
          className={style.rightPosition}
          selectable={false}
          mode={"horizontal"}
        >
          <Menu.Item
            className={style.borderRight}
            key={2}
            onClick={this.cancel}
            style={{ color: "white" }}
          >
            <i
              className={"icon iconfont icon-shangyibu"}
              style={{ marginRight: "10px" }}
            />
            撤销
          </Menu.Item>
          <Menu.Item className={style.borderRight} key={3}>
            <div onClick={this.restore} style={{ color: "white" }}>
              <i
                className={"icon iconfont icon-xiayibu"}
                style={{ marginRight: "10px" }}
              />
              恢复
            </div>
          </Menu.Item>
          <Menu.Item
            className={style.borderRight}
            key={4}
            style={{ color: "white" }}
          >
            <NavItemLog />
          </Menu.Item>
          <Menu.Item
            key={5}
            onClick={this.postData.bind(this, "save")}
            style={{ color: "white" }}
          >
            <i
              className={"icon iconfont icon-baocun"}
              style={{ marginRight: "10px" }}
            />
            保存
          </Menu.Item>
          <Menu.Item
            key={6}
            onClick={this.postData.bind(this, "preview")}
            style={{ color: "white" }}
          >
            <i
              className={"icon iconfont icon-yulan"}
              style={{ marginRight: "10px" }}
            />
            预览/设置
          </Menu.Item>
          <Menu.Item
            key={7}
            onClick={this.postData.bind(this, "release")}
            style={{ color: "white" }}
          >
            <i
              className={"icon iconfont icon-fabu"}
              style={{ marginRight: "10px" }}
            />
            发布
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}



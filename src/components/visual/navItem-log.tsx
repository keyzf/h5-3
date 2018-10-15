import * as React from "react";
import { Menu, Dropdown } from "antd";
import { IRootStore } from "../../store/root-store";
import { inject, observer } from "mobx-react";

interface IProps {
  store?: IRootStore;
}

interface IState {}

@inject("store")
@observer
export default class NavItemLog extends React.Component<IProps, IState> {
  onChange = ({ key }) => {
    this.props.store.visualStore.changeLog(key);
  };

  render() {
    const { log } = this.props.store.visualStore;
    const day = new Date().getDay();
    let todayData = [];
    let earlyDate = [];
    if (log.length) {
      log.map((data: { time }, index) => {
        if (day === new Date(data.time).getDay()) {
          todayData.push({ time: data.time, key: index });
        } else {
          earlyDate.push({ time: data.time, key: index });
        }
      });
    }

    const menu = (
      <Menu onClick={this.onChange.bind(this)}>
        {todayData.length ? (
          todayData.map((data: { time; key: number }, index) => {
            return index < 5 ? (
              <Menu.Item key={data.key}>
                {new Date(data.time).toLocaleTimeString()}
              </Menu.Item>
            ) : (
              ""
            );
          })
        ) : (
          <Menu.Item>今日无记录</Menu.Item>
        )}
        <Menu.SubMenu title="更多记录" disabled={!earlyDate.length}>
          {earlyDate.map((data: { time; key: number }) => {
            return (
              <Menu.Item key={data.key}>
                {new Date(data.time).toLocaleString()}
              </Menu.Item>
            );
          })}
        </Menu.SubMenu>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <span>
          <i
            className={"icon iconfont  icon-shouye"}
            style={{ marginRight: "10px" }}
          />
          历史记录
        </span>
      </Dropdown>
    );
  }
}

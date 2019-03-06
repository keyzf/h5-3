import * as React from "react";
import { Menu } from "antd";
import NavBack from "../../components/header/back";
import NavVip from "../../components/header/vip";
import NavHelp from "../../components/header/help";
import NavNorm from "../../components/header/norm";
import NavSave from "../../components/header/save";
import NavLog from "../../components/header/log";
import NavRelease from "../../components/header/release";
import NavPreview from "../../components/header/preview";

const MakeNav = React.memo(() => {
  return (
    <div style={style.nav}>
      <Menu {...menu_config}>
        <Menu.Item style={style.border}>
          <NavBack />
        </Menu.Item>
        <Menu.Item style={style.border}>
          <NavVip />
        </Menu.Item>
        <Menu.Item style={style.border}>
          <NavHelp />
        </Menu.Item>
        <Menu.Item style={style.border}>
          <NavNorm />
        </Menu.Item>
      </Menu>
      <Menu {...menu_config}>
        <Menu.Item>
          <NavLog />
        </Menu.Item>
        <Menu.Item>
          <NavPreview />
        </Menu.Item>
        <Menu.Item>
          <NavSave />
        </Menu.Item>
        <Menu.Item>
          <NavRelease />
        </Menu.Item>
      </Menu>
    </div>
  );
});

/**
 * @desc 组件样式
 */
const style: { nav: object; border: object } = {
  nav: {
    display: "flex",
    justifyContent: "space-between"
  },
  border: {
    borderRight: "1px solid rgb(0, 187, 255)"
  }
};
/**
 * @desc menu 组件配置
 */
const menu_config: { selectable: any; mode: any; style: any } = {
  selectable: false,
  mode: "horizontal",
  style: { background: "transparent" }
};

export default MakeNav;

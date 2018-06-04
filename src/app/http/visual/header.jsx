import React, { PureComponent } from "react";
import { Col, Menu, Row, Dropdown, Icon} from "antd";
import { Link } from "react-router-dom";
import { $$logo_database } from "../../../database/layout/logo_database";

class HeaderVisualView extends PureComponent {
  render() {
    // 整体布局
    const LayoutRow = {
      gutter: 16,
      type: "flex",
      align: "center",
      style: {
        alignItems: "center",
        height: "100%",
        overflow: "hidden"
      }
    };
    //选项布局
    const LogoCol = {
      xs: 5,
      sm: 5,
      md: 5,
      lg: 5,
      xl: 3,
      style: {
        display: "flex",
        alignCenter: "center",
        margin: "auto"
      }
    };
    const chooseCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 9, offset: 2 },
      xl: { span: 8, offset: 6 }
    };
    const closeCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 7 },
      xl: { span: 5, offset: 2 }
    };
    // 项目样式
    const chooseMenu = {
      theme: "dark",
      style: { background: "transparent", lineHeight: "50px" },
      selectable: false,
      mode: "horizontal"
    };
    const closeMenu = {
      selectable: false,
      theme: "dark",
      style: { lineHeight: "50px" },
      mode: "horizontal"
    };
    const Menus = {
      xs: { span: 4, offset: 15 },
      sm: { span: 4, offset: 15 },
      md: { span: 4, offset: 15 },
      lg: 0,
      xl: 0
    };
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={"./preview"}>
            <i className={"icon iconfont icon-yulan"} style={{ marginRight: "10px" }}/>
            预览/设置
          </Link>
        </Menu.Item>
        <Menu.Item>
          <i className={"icon iconfont icon-baocun"} style={{ marginRight: "10px" }}/>
          保存
        </Menu.Item>
        <Menu.Item>
          <Link to={"./release"}>
            <i className={"icon iconfont icon-fabu"} style={{ marginRight: "10px" }}/>
            发布
          </Link>
        </Menu.Item>
        <Menu.Item>
          <i className={"icon iconfont icon-icon"} style={{ marginRight: "10px" }}/>
          使用指南
        </Menu.Item>
        <Menu.Item>
          <Link to={"/"}>
            <i className={"icon iconfont icon-iconfonticon2"} style={{ marginRight: "10px" }}/>
            关闭
          </Link>
        </Menu.Item>
      </Menu>
    );


    return (
      <Row {...LayoutRow}>
        <Col {...LogoCol}>
          <img
            src={$$logo_database.get("url")}
            width={$$logo_database.get("width")}
            height={$$logo_database.get("height")}
            alt={"e7wei_logo"}
          />
        </Col>
        <Col {...chooseCol}>
          <Menu {...chooseMenu}>
            <Menu.Item key={"preview"}>
              <Link to={"./preview"}>
                <i className={"icon iconfont icon-yulan"} style={{ marginRight: "10px" }}/>
                预览/设置
              </Link>
            </Menu.Item>
            <Menu.Item key={"save"}>
              <i className={"icon iconfont icon-baocun"} style={{ marginRight: "10px" }}/>
              保存
            </Menu.Item>
            <Menu.Item key={"release"}>
              <Link to={"./release"}>
                <i className={"icon iconfont icon-fabu"} style={{ marginRight: "10px" }}/>
                发布
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col {...closeCol}>
          <Menu {...closeMenu}>
            <Menu.Item key={"help"}>
              <Link to={"/help"}>
                <i className={"icon iconfont icon-icon"} style={{ marginRight: "10px" }}/>
                使用指南
              </Link>
            </Menu.Item>
            <Menu.Item key={"quite"}>
              <Link to={"/"}>
                <i className={"icon iconfont icon-iconfonticon2"} style={{ marginRight: "10px" }}/>
                关闭
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        {/*小屏幕下显示的组件*/}
        <Col {...Menus}>
          <Dropdown overlay={menu}>
            <div>
              <Icon type="bars" style={{ color: "white", fontSize: "20px" }}/>
            </div>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}

export default HeaderVisualView;

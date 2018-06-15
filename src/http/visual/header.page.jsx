import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Col, Menu, Row, Dropdown, Icon } from "antd";
import { $$logo_database } from "../../common/visual/database/logo_database_common";
import CleanContent from "../../containers/visual/func_library/clean_content";
import style from "./header.module.scss";

/**
 * 实现目标：
 * 1、 在大屏下显示选项
 * 2. 在小屏幕下显示logo与面包菜单
 */
class HeaderVisualView extends PureComponent {
  render() {
    // 整体布局
    const LayoutRow = {
      gutter: 16,
      type: "flex",
      align: "center"
    };
    //选项布局
    const LogoCol = {
      xs: 5,
      sm: 5,
      md: 5,
      lg: 4,
      xl: 4
    };
    const chooseCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 12, offset: 1 },
      xl: { span: 10, offset: 4 }
    };
    const closeCol = {
      xs: 0,
      sm: 0,
      md: 0,
      lg: { span: 7 },
      xl: { span: 5, offset: 1 }
    };
    // 项目样式
    const MenuConfig = {
      theme: "dark",
      style: { background: "transparent", lineHeight: "50px" },
      selectable: false,
      mode: "horizontal"
    };
    const Menus = {
      xs: { span: 4, offset: 15 },
      sm: { span: 4, offset: 15 },
      md: { span: 4, offset: 15 },
      lg: 0,
      xl: 0
    };
    //手机屏幕下 菜单项
    const MobileMenu = (
      <Menu>
        <Menu.Item>
          <Link to={"./preview"}>
            <i
              className={"icon iconfont icon-yulan"}
              style={{ marginRight: "10px" }}
            />
            预览/设置
          </Link>
        </Menu.Item>
        <Menu.Item>
          <i
            className={"icon iconfont icon-baocun"}
            style={{ marginRight: "10px" }}
          />
          保存
        </Menu.Item>
        <Menu.Item>
          <Link to={"./release"}>
            <i
              className={"icon iconfont icon-fabu"}
              style={{ marginRight: "10px" }}
            />
            发布
          </Link>
        </Menu.Item>
        <Menu.Item>
          <i
            className={"icon iconfont icon-icon"}
            style={{ marginRight: "10px" }}
          />
          使用指南
        </Menu.Item>
        <Menu.Item>
          <Link to={"/"}>
            <i
              className={"icon iconfont icon-iconfonticon2"}
              style={{ marginRight: "10px" }}
            />
            关闭
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Row className={style.layout} {...LayoutRow}>
        <Col className={style.logo} {...LogoCol}>
          <h1 style={{color:'white',fontFamily:'Chinese Quote',fontStyle:'oblique'}}>易企微</h1>
        </Col>
        <Col {...chooseCol}>
          <Menu {...MenuConfig}>
            <Menu.Item key={"preview"}>
              <Link to={"./preview"}>
                <i
                  className={"icon iconfont icon-yulan"}
                  style={{ marginRight: "10px" }}
                />
                预览/设置
              </Link>
            </Menu.Item>
            <Menu.Item key={"save"}>
              <i
                className={"icon iconfont icon-baocun"}
                style={{ marginRight: "10px" }}
              />
              保存
            </Menu.Item>
            <Menu.Item key={"release"}>
              <Link to={"./release"}>
                <i
                  className={"icon iconfont icon-fabu"}
                  style={{ marginRight: "10px" }}
                />
                发布
              </Link>
            </Menu.Item>
            <Menu.Item key={"null"}>
              <CleanContent/>
            </Menu.Item>
          </Menu>
        </Col>
        <Col {...closeCol}>
          <Menu {...MenuConfig}>
            <Menu.Item key={"help"}>
              <a href={"http://www.e7wei.com/help-article-id-436.html"}>
                <i
                  className={"icon iconfont icon-icon"}
                  style={{ marginRight: "10px" }}
                />
                使用指南
              </a>
            </Menu.Item>
            <Menu.Item key={"quite"}>
              <Link to={"/"}>
                <i
                  className={"icon iconfont icon-iconfonticon2"}
                  style={{ marginRight: "10px" }}
                />
                关闭
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        {/*小屏幕下显示的组件*/}
        <Col {...Menus}>
          <Dropdown overlay={MobileMenu}>
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

import * as React from "react";
import Menu from "antd/lib/menu";
import SaveBtn from "../../containers/saveBtn";

interface Props {
  vid: string,
}

class PreviewHeader extends React.PureComponent<Props, any> {
  /**
   * 返回指定连接
   */
  backUrl = () => {
    window.location.href = `${window.location.origin}/v/${this.props.vid}`;
  };

  render() {
    return (
      <React.Fragment>
        <Menu className={"header_left"} selectable={false} mode={"horizontal"}>
          <Menu.Item key={0}>
            <a href={"https://www.e7wei.com/"}>
              <div className={"logo"}>易企微</div>
            </a>
          </Menu.Item>
        </Menu>
        <Menu className={"header_right"} selectable={false} mode={"horizontal"}>
          <Menu.Item key={0}>
            <SaveBtn name={"release"}>
              <i
                className={"icon iconfont icon-fabu"}
                style={{ marginRight: "10px" }}
              />
              发布
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={1}>
            <SaveBtn name={"save"}>
              <i
                className={"icon iconfont icon-baocun"}
                style={{ marginRight: "10px" }}
              />
              保存
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={2}>
             <span onClick={this.backUrl} style={{ color: "white" }}>
              <i
                className="icon iconfont icon-iconfonticon2"
                style={{ marginRight: "10px" }}
              />
              继续编辑
            </span>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default PreviewHeader;
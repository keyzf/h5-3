import * as React from "react";
import Menu from "antd/lib/menu";
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon'
import SaveBtn from "../../containers/saveBtn";

class VisualHeader extends React.PureComponent<any, any> {
  /**
   * 返回指定连接
   */
  backUrl = () => {
    window.location.href = `${window.location.origin}/long/index.html`;
  };

  render() {
    return (
      <React.Fragment>
        <Menu className={"header_left"} selectable={false} mode={"horizontal"}>
          <Menu.Item className={'v_header_border'} key={0}>
            <i
              onClick={this.backUrl}
              className="iconfont icon-zuojiantou"
              style={{ fontWeight: "bold", fontSize: "20px",color:"white" }}
            />
          </Menu.Item>
          <Menu.Item className={'v_header_border'} key={1}>
            <a
              href={"http://my.e7wei.com/package/index.html"}
              target={"view_window"}
            >
              <Button htmlType={'button'} style={{ border: "none" ,color:"white"}}>
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
          <Menu.Item className={'v_header_border'} key={2}>
            <a
              href={"http://www.e7wei.com/help/article/id/436.html"}
              style={{color:"white"}}
              target={"view_window"}
            >
              <Icon type="question-circle-o"/>
              帮助中心
            </a>
          </Menu.Item>
          <Menu.Item key={3}>
            <a
              href={"http://www.e7wei.com/help/article/id/409.html"}
              style={{color:"white"}}
              target={"view_window"}
            >
              <Icon type="exclamation-circle-o"/>
              内容规范
            </a>
          </Menu.Item>
        </Menu>
        <Menu className={"header_right"} selectable={false} mode={"horizontal"}>
          <Menu.Item key={0}>
            <SaveBtn name={"save"}>
              <i
                className={"icon iconfont icon-baocun"}
                style={{ marginRight: "10px" }}
              />
              保存
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={1}>
            <SaveBtn name={"preview"}>
              <i
                className={"icon iconfont icon-yulan"}
                style={{ marginRight: "10px" }}
              />
              预览/设置
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={2}>
            <SaveBtn name={"release"}>
              <i
                className={"icon iconfont icon-fabu"}
                style={{ marginRight: "10px" }}
              />
              发布
            </SaveBtn>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default VisualHeader;
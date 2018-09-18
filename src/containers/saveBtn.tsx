import * as React from "react";
import { Consumer } from "../context/context";


interface Props {
  version?: string, // 使用数据的版本号
  pv?: string, // pv数

  ui?: object[], // ui组件数据源
  bg?: { img: string, color: string }, //背景组件
  music?: string, //音乐组件

  editor?: { data: object, number: number }, //当前编辑的组件数据

  cover?: string, //分享图片
  desc?: string, // 分享描述
  title?: string, // 分享标题

  url?: string, //发布链接

  post?: object, // ajax函数更新数据
  add?: object, // 向ui中添加数据
  delete?: object // 删除ui中的数据
}

class SaveBtn extends React.Component<Props, any> {
  render() {
    return (
      <Consumer>
        {
          ({ version, ui }) =>
            <div style={{ color: "white" }}>
              {version}
              {ui}
              {this.props.children}
            </div>
        }
      </Consumer>
    );
  }
}

export default SaveBtn;
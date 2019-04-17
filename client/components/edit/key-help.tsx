import * as React from "react";
import { Card } from "antd";

class EditKeyHelp extends React.Component {
  render() {
    /**
     * 组件样式
     */
    const gridStyle: {} = {
      width: "100%",
      textAlign: "center"
    };
    return (
      <Card>
        <Card.Grid style={gridStyle}>多选：Shift + 点选</Card.Grid>
        <Card.Grid style={gridStyle}>删除：delete</Card.Grid>
        <Card.Grid style={gridStyle}>复制：Ctrl + C</Card.Grid>
        <Card.Grid style={gridStyle}>锁定：Ctrl + L</Card.Grid>
        <Card.Grid style={gridStyle}>保存：Shift + S</Card.Grid>
      </Card>
    );
  }
}

export default EditKeyHelp;

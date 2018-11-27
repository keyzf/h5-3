import * as React from "react";
import { Icon, Tooltip } from "antd";
import { useState } from "react";
import ToolBarGrid from "../../components/toolbar/grid";
import ToolBarShare from "../../components/toolbar/share";
import ToolBarKey from "../../components/toolbar/hot-key";
import ToolBarPreview from "../../components/toolbar/preview";


const MakeToolBar = React.memo(() => {
  const [state, setState] = useState(100);

  const zoomIn = () => {
    // @ts-ignore
      document.getElementById("content").style.zoom = `${state + 10}%`;
    setState(
      state + 10
    );
  };

  const zoomOut = () => {
    if (state > 100) {
      // @ts-ignore
        document.getElementById("content").style.zoom = `${state - 10}%`;
      setState(
        state - 10
      );
    }

  };

  const style: { zoomFont:any, center:any } = {
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      padding: "10px 0"
    },
    zoomFont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      padding: "10px 0",
      pointerEvents: "none",
      userSelect: "none"
    }
  };
  return (
    <React.Fragment>
      <ToolBarPreview/>
      <ToolBarKey/>
      <ToolBarShare/>
      <ToolBarGrid/>
      <Tooltip placement="left" title="画板放大">
        <div style={style.center} onClick={zoomIn}>
          <Icon type="zoom-in" theme="outlined" style={{ fontSize: "20px" }}/>
        </div>
      </Tooltip>
      <div style={style.zoomFont}>
        <div style={{ fontSize: "13px" }}>{state}%</div>
      </div>
      <Tooltip placement="left" title="画板缩小">
        <div style={style.center} onClick={zoomOut}>
          <Icon type="zoom-out" theme="outlined" style={{ fontSize: "20px" }}/>
        </div>
      </Tooltip>
    </React.Fragment>
  );
});

export default MakeToolBar;

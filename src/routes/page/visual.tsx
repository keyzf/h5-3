import * as React from "react";
import Loadable from "react-loadable";
import Spin from "antd/lib/spin";
// @ts-ignore
const VisualRouter = Loadable({
  loader: () => import("../../pages/visual/visual"),
  loading: () => {
    return <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }}>
      <Spin tip={"玩命加载中......"} size="large"/>
    </div>;
  },
  timeout: 6000,
  delay: 300
});

export default VisualRouter;

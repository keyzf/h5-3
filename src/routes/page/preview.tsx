import * as React from "react";
import Loadable from "react-loadable";
import Spin from "antd/lib/spin";

// @ts-ignore
const PreviewRouter = Loadable({
  loader: () => import("../../pages/preview/preview"),
  loading: () => {
    return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Spin tip={"玩命加载中......"} size="large"/>
    </div>;
  }
});

export default PreviewRouter;


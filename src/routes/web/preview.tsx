import * as React from "react";
import Spin from "antd/lib/spin";
import loadableVisibility from "react-loadable-visibility/loadable-components";

const PreviewWeb = loadableVisibility(
  () => import("../../app/preview"),
  {
    LoadingComponent: () => (
      <div style={{ height: "100vh" }} className={"center"}>
        <Spin tip={"玩命加载中..."} size="large" />
      </div>
    )
  }
);

export default PreviewWeb;

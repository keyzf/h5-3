import * as React from "react";
import { Spin } from "antd";
import loadable from "loadable-components";
import style from "../../../public/assets/common.scss";

const PreviewWeb = loadable(() => import("../../app/Preview"), {
  LoadingComponent: () => (
    <div style={{ height: "100vh" }} className={style.center}>
      <Spin tip={"玩命加载中..."} size="large" />
    </div>
  )
});

export default PreviewWeb;

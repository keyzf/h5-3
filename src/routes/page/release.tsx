import * as React from "react";
import Loadable from "react-loadable";
import Spin from "antd/lib/spin";

// @ts-ignore
const ReleaseRouter = Loadable({
  loader: () => import("../../pages/release/release"),
  loading: () => {
    return <div className={'pageLoading'}>
      <Spin tip={"玩命加载中......"} size="large"/>
    </div>;
  }
});


export default ReleaseRouter;

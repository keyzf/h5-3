import * as React from "react";
import * as ReactDOM from "react-dom";
import { Spin } from "antd";
import { css } from "react-emotion";
import { StoreProvider } from "redux-react-hook";
import store from "./store/store";
import analyzeUrl from "./tools/analyze-url";

/**
 * @desc  解析路由，导入相应页面
 * 优化：
 * 1. 拆分页面文件
 * 2. 等待loading 动画
 */
const App = React.memo(() => {
  const { id, web } = analyzeUrl();
  const Make = React.lazy(() => import("./page/make/Make"));
  const Release = React.lazy(() => import("./page/release/Release"));
  const style = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  `;
  const loading = (
    <div className={style}>
      <Spin delay={300} size="large" tip="拼命加载中..."/>
    </div>
  );
  return (
    <React.Suspense fallback={loading}>


      {web === "v" ? <Make id={id}/> : <Release id={id}/>}
    </React.Suspense>
  );
});

ReactDOM.render(
  <StoreProvider value={store}>
    <App/>
  </StoreProvider>,
  document.getElementById("root")
);

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Spin } from "antd";
import { css } from "react-emotion";
import { StoreProvider } from "redux-react-hook";
import store from "./store/store";
import analyzeUrl from "./tools/analyze-url";
// 生产环境下删除
// import "./api/mock";

/**e
 * 组件函数
 */
const App = React.memo(() => {
  /**
   * 解析路由
   */

  const { id, web } = analyzeUrl();

  /**
   * 样式
   */
  const style = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  `;

  /**
   * 拆分路由
   */
  const Make = React.lazy(() => import("./app/make/Make"));
  const Release = React.lazy(() => import("./app/release/Release"));

  /**
   * loading 样式
   */
  const loading = (
    <div className={style}>
      <Spin delay={300} size="large" tip="拼命加载中..." />
    </div>
  );
  return (
    <React.Suspense fallback={loading}>
      {web === "v" ? <Make id={id} web={web} /> : ""}
      {web === "r" ? <Release id={id} web={web} /> : ""}
    </React.Suspense>
  );
});

ReactDOM.render(
  <StoreProvider value={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);


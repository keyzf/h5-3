/**
 * @description:将App渲染至div上
 * @author:陈迎2018年10月08日13:49:35
 * @version:0.9x
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, observer, inject } from "mobx-react";
import { rootProps } from "./store/store";
import GetParaUrl from "./utils/parseUrl";
import VisualWeb from "./routes/web/visual";
import PreviewWeb from "./routes/web/preview";
import ReleaseWeb from "./routes/web/release";
import DevTools from "mobx-react-devtools"; // 生产环境下删除（实际还是保留，便于debug）

/**
 * @description:解析url---发送action给store将数值存储---判断进入相应页面
 * @author:陈迎---2018年10月08日13:49:35
 * @version:0.9x
 */
interface IAppProps {
  action?: { addIdState };
}

@inject("action")
@observer
class App extends React.Component<IAppProps, any> {
  render() {
    const { id, state } = GetParaUrl(window.location.href);
    this.props.action.addIdState(id, state);
    /**
     * 判断需要跳转的页面
     */
    let Redirect: object;
    switch (state) {
      case "v":
        return (Redirect = <VisualWeb />);
      case "p":
        return (Redirect = <PreviewWeb />);
      case "r":
        return (Redirect = <ReleaseWeb />);
      default:
        Redirect = (
          <div style={{ display: "none" }}>
            {(window.location.href = "http://my.e7wei.com/404.html")}
          </div>
        );
    }

    /**
     * 组件渲染
     */
    return (
      <React.Fragment>
        {Redirect}
        <DevTools />
      </React.Fragment>
    );
  }
}

/**
 * @description:mobx数据包裹在外层并将App组件渲染至id为root的div上
 * @author:陈迎2018年10月08日13:49:35
 * @version:0.9x
 */
ReactDOM.render(
  <Provider {...rootProps}>
    <App />
  </Provider>,
  document.getElementById("root")
);

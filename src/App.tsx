import * as React from "react";
import VisualRouter from "./routes/page/visual";
import PreviewRouter from "./routes/page/preview";
import ReleaseRouter from "./routes/page/release";

interface Props {
  /**
   * 用户id
   */
  vid: string;
  /**
   * 即将跳转的页面
   */
  state: string;
}

class App extends React.PureComponent<Props, void> {
  render() {
    const { vid, state } = this.props;

    /**
     * 判断需要跳转的页面
     */
    let Redirect: object ;
    switch (state) {
      case "v":
        return (Redirect = <VisualRouter vid={vid} state={state}/>);
      case "p":
        return (Redirect = <PreviewRouter vid={vid} state={state}/>);
      case "r":
        return (Redirect = <ReleaseRouter vid={vid} state={state}/>);
      default:
        Redirect = (
          <div style={{ display: "none" }}>
            非法访问!{(window.location.href = "http://my.e7wei.com/404.html")}
          </div>
        );
    }

    /**
     * 组件渲染
     */
    return <React.Fragment>{Redirect}</React.Fragment>;
  }
}

export default App;

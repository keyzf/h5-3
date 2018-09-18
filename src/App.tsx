import * as React from "react";
import VisualRouter from "./routes/page/visual";
import PreviewRouter from "./routes/page/preview";
import ReleaseRouter from "./routes/page/release";

interface AppProps {
  vid: string;
  state: string;
}

class App extends React.PureComponent<AppProps, any> {
  render() {

    /**
     * 数据处理与判断
     */
    const { vid, state } = this.props;
    let Redirect: object | boolean;
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

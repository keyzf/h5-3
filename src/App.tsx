import * as React from "react";
import GetParaUrl from "./utils/parseUrl";

interface AppProps {
  vid: string;
  state: string;
}

class App extends React.PureComponent<AppProps, null> {
  render() {
    const { vid, state } = this.props;
    return (
      <React.Fragment>
        {
          vid === "v" ? "<VisualRouter sid={sid} state={state}/>" : ""
        }
        {
          vid === "p" ? "<PreviewRouter sid={sid} state={state}/>" : ""
        }
        {
          vid === "r" ? "<ReleaseRouter sid={sid} state={state}/>" : ""
        }
        {
          vid === "" ? window.location.href = "http://my.e7wei.com/404.html" : ""
        }
      </React.Fragment>
    );
  }
}

export default App;